const MenuHomeValue = 0
const MenuCompanyValue = 1
const MenuPrivateValue = 2

const MenuHomePath = '/'
const MenuCompanyPath = '/company'
const MenuPrivatePath = '/private'

const Menu = [
  {
    value: MenuHomeValue,
    label: 'Home',
    path: MenuHomePath,
  },
  {
    value: MenuCompanyValue,
    label: 'Company',
    path: MenuCompanyPath,
  },
  {
    value: MenuPrivateValue,
    label: 'Private',
    path: MenuPrivatePath,
  },
]

export const MenuValues = {
  Home: MenuHomeValue,
  Company: MenuCompanyValue,
  Private: MenuPrivateValue,
}

export const MenuPaths = {
  Home: MenuHomePath,
  Company: MenuCompanyPath,
  Private: MenuPrivatePath,
  PrivateLogin: `${MenuPrivatePath}/login`,
}

export default Menu
