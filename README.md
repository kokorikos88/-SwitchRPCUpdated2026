# SwitchRPCUpdated 2026

### The simplest possible Nintendo Switch/Switch 2 Discord integration available.

The list of all supported titles is availible in the [supportlist.md](https://github.com/queenbiscuit311/SwitchRPCUpdated/blob/master/supportlist.md) file.

Entering a title that is not in the support list will still work, although the game's icon will not show up on Discord.

### Building

1. Clone this repository:   
`git clone https://github.com/queenbiscuit311/SwitchRPCUpdated.git` 
2. Enter the directory:   
`cd SwitchRPCUpdated`
5. Install dependencies (if using Windows, you may need to delete package-lock.json):   
`npm install`
6. Build:   
`electron-builder`
7. Done! Your compiled binaries will be in the `dist` folder.

## Credits

Credits to:

[queenbiscuit311](https://github.com/queenbiscuit311) for creating SwitchRPCUpdated.

[realdevon](https://github.com/realdevon) for creating the original SwitchRPC.

[simonliii](https://github.com/simonliii) for creating pull request realdevon/SwitchRPC/[#59](https://github.com/realdevon/SwitchRPC/pull/59), which made the games list clickable.

[davidcralph](https://github.com/davidcralph) for creating pull request realdevon/SwitchRPC/[#17](https://github.com/realdevon/SwitchRPC/pull/17), which replaced the `request` package with `axios`.

## Copyright Acknowledgements

### Copyright 2018-2021 NintenZone Technologies. Nintendo Switch, Nintendo Switch 2, the Nintendo Switch logos, and Nintendo Switch 2 logos are property of Nintendo.
