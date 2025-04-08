import { Moon, Sun } from "lucide-react"

export function AppearanceSettings() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-900">
      <div className="px-6 py-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Appearance</h2>
        <p className="text-gray-500 dark:text-gray-400">Customize how Vidlancing looks and feels</p>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Theme</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-1 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2 rounded-md p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-gray-200" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-gray-200" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-gray-200" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200" />
                  </div>
                </div>
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Sun className="h-3 w-3" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-white/20 text-center text-sm font-medium">
                  Light
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-1 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2 rounded-md bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-700" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-700" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-700" />
                  </div>
                </div>
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Moon className="h-3 w-3" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950 to-slate-950/20 text-center text-sm font-medium text-slate-50">
                  Dark
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg border-2 border-blue-500 bg-white p-1 dark:border-blue-500 dark:bg-gray-800">
                <div className="space-y-2 rounded-md p-2">
                  <div className="space-y-2 rounded-md bg-gray-100 p-2 shadow-sm dark:bg-slate-800">
                    <div className="h-2 w-[80px] rounded-lg bg-gray-200 dark:bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200 dark:bg-slate-700" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-gray-100 p-2 shadow-sm dark:bg-slate-800">
                    <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200 dark:bg-slate-700" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-gray-100 p-2 shadow-sm dark:bg-slate-800">
                    <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-slate-700" />
                    <div className="h-2 w-[100px] rounded-lg bg-gray-200 dark:bg-slate-700" />
                  </div>
                </div>
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </span>
                <span className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-white/20 text-center text-sm font-medium dark:from-slate-950 dark:to-slate-950/20">
                  System
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Accent Color</h4>
            <div className="grid grid-cols-3 gap-4">
              <label className="cursor-pointer">
                <input type="radio" name="accent" value="violet" className="peer sr-only" defaultChecked />
                <div className="flex items-center justify-between rounded-md border-2 border-gray-200 p-4 transition-all peer-checked:border-violet-500 peer-checked:ring-2 peer-checked:ring-violet-500 peer-checked:ring-offset-2 dark:border-gray-700 dark:peer-checked:ring-offset-gray-900">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Violet</span>
                  <div className="h-6 w-6 rounded-full bg-violet-500" />
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="accent" value="blue" className="peer sr-only" />
                <div className="flex items-center justify-between rounded-md border-2 border-gray-200 p-4 transition-all peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2 dark:border-gray-700 dark:peer-checked:ring-offset-gray-900">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Blue</span>
                  <div className="h-6 w-6 rounded-full bg-blue-500" />
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="accent" value="green" className="peer sr-only" />
                <div className="flex items-center justify-between rounded-md border-2 border-gray-200 p-4 transition-all peer-checked:border-green-500 peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 dark:border-gray-700 dark:peer-checked:ring-offset-gray-900">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Green</span>
                  <div className="h-6 w-6 rounded-full bg-green-500" />
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Language</h4>
            <select className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
              <option value="en" selected>
                English
              </option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="pt">Português</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Font Size</h4>
            <div className="grid grid-cols-3 gap-4">
              <label className="cursor-pointer">
                <input type="radio" name="font-size" value="small" className="peer sr-only" />
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-500 dark:border-gray-700 dark:bg-gray-800">
                  <span className="text-xs font-medium text-gray-900 dark:text-white">Small</span>
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="font-size" value="medium" className="peer sr-only" defaultChecked />
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-500 dark:border-gray-700 dark:bg-gray-800">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Medium</span>
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="font-size" value="large" className="peer sr-only" />
                <div className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-500 dark:border-gray-700 dark:bg-gray-800">
                  <span className="text-base font-medium text-gray-900 dark:text-white">Large</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

