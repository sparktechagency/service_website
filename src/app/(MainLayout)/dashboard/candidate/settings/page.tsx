import {
    Layers,
    Briefcase,
    Bookmark,
    Bell,
    Settings,
    User,
    UserCircle,
    Cog,
    Upload,
    Link,
    FileText,
    MoreVertical,
    Edit,
    Trash2,
    Plus,
    LogOut,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Card } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
  
  const CandidateSettingsPage = () => {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">Candidate Dashboard</h2>
          </div>
          <nav className="p-2">
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                  <Layers className="w-5 h-5 mr-3 text-gray-500" />
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                  <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                  Applied Jobs
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                  <Bookmark className="w-5 h-5 mr-3 text-gray-500" />
                  Favorite Jobs
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">
                  <Bell className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Job Alert</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">09</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md"
                >
                  <Settings className="w-5 h-5 mr-3 text-gray-500" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-4 absolute bottom-0 lg:relative">
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <LogOut className="w-5 h-5 mr-2" />
              Log-out
            </button>
          </div>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Setting</h1>
  
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6 border-b border-gray-200 w-full justify-start">
                <TabsTrigger
                  value="personal"
                  className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3"
                >
                  <User className="w-4 h-4" />
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3"
                >
                  <UserCircle className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3"
                >
                  <Cog className="w-4 h-4" />
                  Account Setting
                </TabsTrigger>
              </TabsList>
  
              <TabsContent value="personal" className="space-y-8">
                <section>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                      <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <Upload className="h-10 w-10 text-gray-400" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">Browse photo or drop here</p>
                        <p className="text-xs text-gray-500 mt-1 text-center">
                          A photo larger than 400 pixels work best. Max photo size 5 MB.
                        </p>
                      </div>
                    </div>
  
                    <div className="col-span-1 md:col-span-2 space-y-6">
                      <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                          Full name
                        </label>
                        <Input id="fullname" className="w-full" />
                      </div>
  
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                          Title/headline
                        </label>
                        <Input id="title" className="w-full" />
                      </div>
                    </div>
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                          <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Educations</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="associate">Associate Degree</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Personal Website</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Link className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input className="pl-10" placeholder="Website url..." />
                    </div>
                  </div>
  
                  <div className="mt-6">
                    <Button className="bg-blue-800 hover:bg-blue-900">Save Changes</Button>
                  </div>
                </section>
  
                <section>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Your CV/Resume</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm font-medium">Professional Resume</p>
                          <p className="text-xs text-gray-500">3.5 MB</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Resume</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </Card>
  
                    <Card className="p-4 flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm font-medium">Product Designer</p>
                          <p className="text-xs text-gray-500">4.7 MB</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Resume</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </Card>
  
                    <Card className="p-4 flex items-start justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-gray-500 mr-3" />
                        <div>
                          <p className="text-sm font-medium">Visual Designer</p>
                          <p className="text-xs text-gray-500">1.3 MB</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Resume</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </Card>
  
                    <Card className="p-4 border-dashed flex items-center justify-center cursor-pointer hover:bg-gray-50">
                      <div className="text-center">
                        <div className="mb-2 flex justify-center">
                          <Plus className="h-6 w-6 text-gray-400" />
                        </div>
                        <p className="text-sm font-medium">Add CV/Resume</p>
                        <p className="text-xs text-gray-500">Browse file or drop here, only pdf</p>
                      </div>
                    </Card>
                  </div>
                </section>
              </TabsContent>
  
              <TabsContent value="profile">
                <div className="flex items-center justify-center h-40 border rounded-md">
                  <p className="text-gray-500">Profile settings content</p>
                </div>
              </TabsContent>
  
              <TabsContent value="account">
                <div className="flex items-center justify-center h-40 border rounded-md">
                  <p className="text-gray-500">Account settings content</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    )
  }
  
  export default CandidateSettingsPage;