
# 

### [**DEV**]()
### `npm i` 

Перед запуском проекта вам нужно установить модули. 

### `npm start`  

После установки модулей запустите проект.

### `npm run build`  

Для того чтобы сбилдить проект.

# Figma: 
`https://www.figma.com/file/RTGoCdhfmXPN98tEsZpiLp/Rage-MP?node-id=53%3A195`

![Image alt](https://cdn.discordapp.com/attachments/1002966634996183160/1022976927528669305/over.png)

# Ивенты

## Сервер -> Клиент

### HUD
![Image alt](https://cdn.discordapp.com/attachments/1002966634996183160/1022591273670021151/hud.png)

#### Отобразить
```c#
EventManager.callHandler('hud', 'show', {show: true})
```

#### Сокрыть
```c#
EventManager.callHandler('hud', 'show', {show: false})
```

#### Обновить значения
```c#
EventManager.callHandler('hud', 'updateValue', {cash: 'yourValue', bank: 'yourValue', micro: boolean, wantedLevel: 0, online: 325, playerId: 2336, greenZone: 35})
```
