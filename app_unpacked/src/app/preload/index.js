'use strict'

// NOTE: this file is not processed by webpack
{
  const { contextBridge, ipcRenderer: ipc } = require('electron')

  const api = {
    ipcRenderer: {
      on: (...args) => ipc.on(...args),
      once: (...args) => ipc.once(...args),
      removeListener: (...args) => ipc.removeListener(...args),
      removeAllListeners: (...args) => ipc.removeAllListeners(...args),
      send: (...args) => ipc.send(...args),
      sendSync: (...args) => ipc.sendSync(...args),
      invoke: (...args) => ipc.invoke(...args),
    }
  }

  try {
    // contextIsolation is enabled
    contextBridge.exposeInMainWorld('exodusPreload', api)
  } catch (e) {
    // contextIsolation is disabled
    window.exodusPreload = api
  }
}
