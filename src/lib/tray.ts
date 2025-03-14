import { TrayIcon, TrayIconOptions } from "@tauri-apps/api/tray";
import linuxIcon from "../assets/linux.png";
import { Menu, MenuItem } from "@tauri-apps/api/menu";
import { Window } from "@tauri-apps/api/window";

const menu = await Menu.new();

const menuItem = await MenuItem.new({
  text: "Abrir Aplicativo",
  action: async () => {
    const window = Window.getCurrent();
    await window.show();
    await window.setFocus();
  },
});

const options: TrayIconOptions = {
  tooltip: "WSL Tray",
  icon: linuxIcon,
  showMenuOnLeftClick: true,
  menu: menu,
  action: (event) => {
    switch (event.type) {
      case 'Click':
        console.log(
          `mouse ${event.button} button pressed, state: ${event.buttonState}`
        );
        break;
      case 'DoubleClick':
        console.log(`mouse ${event.button} button pressed`);
        break;
      case 'Enter':
        console.log(
          `mouse hovered tray at ${event.rect.position.x}, ${event.rect.position.y}`
        );
        break;
      case 'Move':
        console.log(
          `mouse moved on tray at ${event.rect.position.x}, ${event.rect.position.y}`
        );
        break;
      case 'Leave':
        console.log(
          `mouse left tray at ${event.rect.position.x}, ${event.rect.position.y}`
        );
        break;
    }
  },
};

const tray = await TrayIcon.new(options);

menu.append(menuItem);
tray.setIcon(linuxIcon);
tray.setMenu(menu);
