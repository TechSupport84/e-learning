import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'JavaScript', href: '#', current: false },
  { name: 'Python', href: '#', current: false },
  { name: 'C#', href: '#', current: false },
  { name: 'React', href: '#', current: false },
  { name: 'React Native', href: '#', current: false },
  { name: 'Express', href: '#', current: false },
  { name: 'Mysql', href: '#', current: false },
  { name: 'Mongodb', href: '#', current: false },
  { name: 'Nodejs', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mb-20"> {/* Added mb-20 for bottom margin */}
      {/* Top Navbar */}
      <div className="bg-gray-900 text-white py-2 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Logo-learning.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-semibold">Tech-learing </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-400 hover:text-white">
            <BellIcon className="h-6 w-6" />
          </button>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full bg-gray-800 p-1 focus:ring-2 focus:ring-white">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full"
                alt="User Profile"
              />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md py-1 ring-1 ring-black/5">
              <MenuItem>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-400')}>
                    Your Profile
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                    Settings
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                    Sign Out
                  </a>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      {/* Bottom Navbar */}
      <Disclosure as="nav" className="bg-gray-800 shadow-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white">
                    {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </DisclosureButton>
                </div>

                {/* Desktop Navbar Links */}
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navbar */}
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
