# SwitchRPCUpdated2026

The simplest possible Nintendo Switch/Switch 2 Discord integration available for Linux, macOS, and Windows, now with an updated game list.

The list of all supported titles is availible in the supportlist.md file.

Entering a title that is not in the support list will still work, although the game's icon will not show up on Discord.

Since the file that handles the supported games is hosted on GitHub and the images for the Rich Presence are stored on Discord Developer, you will not need to update your client when the game list updates; you may simply restart the application.
Explanation:

SwitchRPCUpdated is the simplest possible implementation of Discord Rich Presence for the Nintendo Switch/Switch 2. Instead of directly interfacing with Nintendo's servers like nxapi, SwitchRPCUpdated has you manually set your Rich Presence by setting a game and a description. While not automatic, this method is reliable and is not going to break when Nintendo updates their APIs, unlike nxapi. This project is mainly intended as a backup in case nxapi stops working, but it can also be used in its own right.
Why a fork?

This fork of the original SwitchRPC was made because it was seemingly abandoned in 2020, leaving only a very small and outdated list of supported titles. The supported title list for the original project was also hosted remotely on the developer's server, making it impossible to update it manually. I would normally be way out of my depth programming something like this from scratch, but fortunately the codebase for SwitchRPC is very small and easy to understand, so I was able to create a fork without much issue. After figuring out how the app worked and how to modify the title list, I decided to make this fork so that the app could be made more useful by adding more titles.
Screenshots:

image

image

WIP: Switch 2 Support, Make Games list searchable, Update notifier
Installation

Currently availible build types:

Windows (Portable), Windows (Installer), Linux (AppImage), macOS (Apple Silicon)

Builds are availible in the releases section.

Since I don't have an Intel Mac to build on, macOS x86_64 users will need to build from source.
Building from source:
Prerequisites:

Before building, ensure that nodejs and npm are installed on your device. Instructions for Linux, macOS, and Windows are provided below:

Linux:

Arch Linux and related distributions [Manjaro, EndeavourOS] (Pacman): sudo pacman -S nodejs npm

Fedora/RHEL and related distributions [Nobara, Rocky Linux, Alma Linux] (DNF): sudo dnf module install nodejs

Debian and related distributions [Ubuntu, Linux Mint] (APT): sudo apt install nodejs npm

Gentoo Linux (Portage): emerge nodejs

Void Linux (XBPS): sudo xbps-install nodejs

macOS:

Brew Package Manager: brew install node

Windows:

Option 1: Instructions to install node.js and npm are provided by Microsoft here.

Option 2: Chocolatey Package Manager: choco install nodejs

Additionally, ensure that electron-builder and @electron/packager are installed through npm:

Linux/macOS:

sudo npm install electron-builder @electron/packager -g

Windows:

npm install electron-builder @electron/packager -g
Building

    Clone this repository:
    git clone https://github.com/queenbiscuit311/SwitchRPCUpdated.git
    Enter the directory:
    cd SwitchRPCUpdated
    Install dependencies (if using Windows, you may need to delete package-lock.json):
    npm install
    Build:
    electron-builder
    Done! Your compiled binaries will be in the dist folder.

Credits

Credits to:

queenbiscuit311 for creating SwitchRPCUpdated.

realdevon for creating the original SwitchRPC.

simonliii for creating pull request realdevon/SwitchRPC/#59, which made the games list clickable.

davidcralph for creating pull request realdevon/SwitchRPC/#17, which replaced the request package with axios.
Copyright Acknowledgements
Copyright 2018-2021 NintenZone Technologies. Nintendo Switch, Nintendo Switch 2, the Nintendo Switch logos, and Nintendo Switch 2 logos are property of Nintendo.
