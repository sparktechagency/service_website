
export type TMessage = {
  _id: string;
  senderId: string;
  receiverId: string;
  conversationId: string;
  createdAt: string;
  updatedAt: string;
  message: string;
};



export const messages: TMessage[] = [
  {
    _id: "686ae5c7cb36f22f49f59596",
    senderId: "685407cc450a47934022a9d7",
    receiverId: "6825e844e3d9499decc80fdb",
    conversationId: "686ae4d88db84a74769fed0",
    createdAt: "2025-07-06T11:31:08.442Z",
    updatedAt: "2025-07-06T11:31:08.442Z",
    message: "hkl"
  },
  {
    _id: "686ae5b983cb36f22f49f595c",
    senderId: "6825e844e3d9499decc80fdb",
    receiverId: "685407cc450a47934022a9d7",
    conversationId: "686ae4d88db84a74769fed0",
    createdAt: "2025-07-06T11:31:22.961Z",
    updatedAt: "2025-07-06T11:31:22.961Z",
    message: "ok"
  },
  {
    _id: "686ae5cb36f22f49f595b94",
    senderId: "685407cc450a47934022a9d7",
    receiverId: "6825e844e3d9499decc80fdb",
    conversationId: "686ae4d88db84a74769fed0",
    createdAt: "2025-07-06T11:31:25.942Z",
    updatedAt: "2025-07-06T11:31:25.942Z",
    message: "drgrt"
  },
  {
    _id: "686ae60b36f22f49f595bc",
    senderId: "6825e844e3d9499decc80fdb",
    receiverId: "685407cc450a47934022a9d7",
    conversationId: "686ae4d88db84a74769fed0",
    createdAt: "2025-07-06T11:31:50.632Z",
    updatedAt: "2025-07-06T11:31:50.632Z",
    message: "gfbfgb"
  },
  {
    _id: "686ae60eb36f22f49f595be",
    senderId: "685407cc450a47934022a9d7",
    receiverId: "6825e844e3d9499decc80fdb",
    conversationId: "686ae4d88db84a74769fed0",
    createdAt: "2025-07-06T11:34:14.632Z",
    updatedAt: "2025-07-06T11:34:14.632Z",
    message: "rt"
  }
];
