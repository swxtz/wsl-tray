Here's a comprehensive `README.md` for your project:

---

# WSL Tray 🚀⚡️

**WSL Tray** is a fast, lightweight application that allows you to manage your Windows Subsystem for Linux (WSL) instances directly from your desktop tray. It provides a simple and efficient interface to control, restart, and shut down WSL, all while keeping system resource usage to a minimum. Whether you're a developer or a power user, WSL Tray makes managing your WSL environments easier and faster!

---

## ⚙️ **Technologies Used**

### **Frontend**
- **Vite**: A modern, fast build tool that ensures quick startup and instant hot module replacement (HMR) for a smooth development experience.
- **Tailwind CSS**: A utility-first CSS framework that lets you style your application directly within your HTML with minimal effort and maximum flexibility.
- **Framer Motion**: For smooth animations and transitions, ensuring a responsive and delightful UI experience.

### **Backend**
- **Rust**: The backend is built with **Rust**, a systems programming language known for its memory safety, performance, and reliability. Rust is used to handle WSL system calls, making the app both powerful and efficient.

---

## 🛠️ **Features**

- **Control WSL Instances**: Instantly start, restart, or shut down your WSL environments from your desktop tray.
- **Minimal Footprint**: Optimized for performance and low system resource usage, ensuring that WSL Tray never slows down your system.
- **Fast and Responsive UI**: Built with **Vite** and styled using **Tailwind CSS** for a snappy user experience.
- **Smooth Animations**: **Framer Motion** provides fluid animations, making the UI more dynamic and interactive.
- **Cross-Platform Support**: Although initially built for Linux, the project is configured to be cross-platform, allowing easy compatibility with other operating systems.

---

## 🚀 **Installation**

### **Prerequisites**

Before you begin, make sure you have the following installed on your system:

- **Rust**: The backend is built using Rust. If you don't have Rust installed, you can do so by running:
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
  
- **Node.js & npm**: The frontend requires Node.js and npm. Download them from [here](https://nodejs.org/).

### **Installation Methods**

#### 1. **Installation with Pre-built Binaries (Recommended)**

For a faster setup, you can use the pre-built binaries for your system. This method doesn’t require building the project from scratch, and you can get started right away.

- Go to the [releases page](https://github.com/swxtz/wsl-tray/releases).
- Download the appropriate binary for your platform (Linux, Windows, or macOS).
- Follow the instructions for your OS:
  - On Linux/macOS: Extract the downloaded archive and run the binary.
    ```sh
    tar -xvzf wsl-tray-linux-x64.tar.gz
    cd wsl-tray
    ./wsl-tray
    ```
  - On Windows: Extract the `.zip` file and run the `wsl-tray.exe` executable.

This method ensures that you don’t need to worry about the build process and can directly start using **WSL Tray** with minimal setup.

#### 2. **Installation with Portable Binaries**

If you prefer to use portable binaries, you can download them and run **WSL Tray** without installing it on your system.

- Go to the [releases page](https://github.com/swxtz/wsl-tray/releases).
- Download the portable binary for your platform.
- Extract the archive (for Linux/macOS or Windows).
- Run the binary from any directory, no installation required.

This method is great for those who want to use **WSL Tray** on multiple systems without installing it permanently.

#### 3. **Building from Scratch (For Developers)**

If you want to build **WSL Tray** from source (to contribute or customize the app), follow these steps:

##### **Step 1: Clone the Repository**
```sh
git clone https://github.com/swxtz/wsl-tray.git
cd wsl-tray
```

##### **Step 2: Install Frontend Dependencies**
The frontend uses **Vite**, **Tailwind CSS**, and **Framer Motion**. Install the required dependencies by running:
```sh
cd src-tauri
npm install
```

##### **Step 3: Install Backend Dependencies (Rust)**
Ensure you have **Rust** installed and then build the backend by running:
```sh
cargo install
```

##### **Step 4: Build and Run**
Once the dependencies are installed, build and run the app:
```sh
cargo tauri dev
```

This will compile both the frontend and backend, and you'll have the full app running locally.

---

### **Post-Installation Steps**

After installing or building the app, you can:

- Launch **WSL Tray** from your desktop tray.
- Use the tray icons to **start**, **restart**, or **shut down** your WSL instances with a single click.

---

### **Troubleshooting**

If you encounter issues during installation or running the app, feel free to check the [issues section](https://github.com/swxtz/wsl-tray/issues) on GitHub, or open a new issue describing the problem you're facing.

---

## 🧑‍💻 **Development**

### **Frontend**

The frontend is built with **Vite** for fast builds and **TailwindCSS** for responsive, utility-first styling. We also use **Framer Motion** to animate the interface, making sure everything looks smooth as you interact with the app.

Feel free to tweak the UI styles using Tailwind's classes or add new pages and components. The build process with Vite is quick and allows for live reloading during development.

### **Backend**

The backend of WSL Tray is built using **Rust**, taking full advantage of its speed and memory safety. The application uses **system calls** to interact with WSL, providing features like starting, restarting, and stopping WSL environments directly from the tray.

Rust's performance ensures the application remains highly efficient, even when making system-level calls, and minimizes any impact on your system's performance.

---

## 🧰 **Contributing**

We welcome contributions to improve **WSL Tray**! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests and documentation for your changes.
4. Submit a pull request.

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 **Acknowledgements**

- **Vite**: A next-generation, fast build tool.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development.
- **Framer Motion**: An animation library for React, making your app feel more interactive and smooth.
- **Rust**: A systems programming language that powers the backend of WSL Tray, ensuring speed and memory safety.
