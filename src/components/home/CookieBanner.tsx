"use client";

import { useEffect, useState } from "react";
import { baseUrl } from "@/redux/features/api/apiSlice";
import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from "next/link";

interface Banner {
  _id: string;
  description: string;
}

const CookieBanner = () => {
  const [banners, setBanners] = useState<Banner | null>(null);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const cookieAccepted = Cookies.get("myAwesomeCookieName2");
    if (cookieAccepted === "true") {
      setShowBanner(false);
    } else {
      const fetchBanners = async () => {
        try {
          const res = await fetch(`${baseUrl}/dashboard/cookie-text`);
          const data = await res.json();
          setBanners(data?.data || null);
        } catch (error) {
          console.error("Failed to fetch banners", error);
        }
      };
      fetchBanners();
    }
  }, []);

  if (!banners || !banners.description || !showBanner) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full z-50 flex justify-center px-4">
      <CookieConsent
        location="bottom"
        buttonText="X"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#fff",
          color: "#333",
          border: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "960px",
          margin: "0 auto 20px",
          left: "0",
          right: "0",
        }}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
        enableDeclineButton={false}
        expires={150}
        containerClasses="custom-cookie-container"
      >
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Notice</h2>
          <div dangerouslySetInnerHTML={{ __html: banners.description }} />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <Link href="/privacy-policy" passHref legacyBehavior>
            <button className="text-sm px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100">
              Learn more privacy policy.
            </button>
          </Link>

          <button
            className="text-sm px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
            onClick={() => {
              Cookies.set("myAwesomeCookieName2", "true", { expires: 150 });
              setShowBanner(false);
            }}
          >
            Agree
          </button>
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookieBanner;
