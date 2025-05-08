"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SocialLinkForm from "@/components/dashboard/employer/settings/SocialLinkForm";
import CompanyInformation from "@/components/dashboard/employer/settings/CompanyInformation";
import { Cog, User, UserCircle } from "lucide-react";
import EmployerAccountSettings from "@/components/dashboard/employer/settings/AccountSettings/EmployerAccountSettings";

const EmployerSettingsPage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Settings
          </h1>

          <Tabs defaultValue="company" className="w-full">
            <TabsList className="mb-6 border-b border-gray-200 w-full justify-start">
              <TabsTrigger
                value="company"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 cursor-pointer"
              >
                <User className="w-4 h-4" />
                Company Info
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 cursor-pointer"
              >
                <UserCircle className="w-4 h-4" />
                Social Media Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 cursor-pointer"
              >
                <Cog className="w-4 h-4" />
                Account Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="company" className="space-y-8">
              <CompanyInformation/>
            </TabsContent>
            <TabsContent value="social">
              <SocialLinkForm />
            </TabsContent>
            <TabsContent value="account">
              <EmployerAccountSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default EmployerSettingsPage;
