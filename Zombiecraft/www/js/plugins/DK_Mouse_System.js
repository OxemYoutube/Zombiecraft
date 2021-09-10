/*
Title: Mouse System
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1.0
Release: 12.10.2020
First release: 11.09.2020
*/

/*ru
Название: Система Мыши
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1.0
Релиз: 12.10.2020
Первый релиз: 11.09.2020
*/

/*:
 * @plugindesc v.1.1.0 [PRO] Allows you to change the mouse cursor, activate events by clicking, hovering, etc.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Info about plugin ###
 Title: DK_Mouse_System
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.1.0
 Release: 12.10.2020
 First release: 11.09.2020

 ###=========================================================================
 ## Compatibility
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###===========================================================================
 ## Instructions
 ###===========================================================================
 Use event comments
 1. <hover_icon: iconIndex>
 Show icon when hovering over an event.
 Replace iconIndex with the icon number or synonym (don't forget to customize them!)
 Example: <hover_icon: 4>
 Example: <hover_icon: talk>

 2. <click_activate>
 Start an event by clicking on it

 3. <hover_activate>
 Activate an event on mouse hover

 4. <custom_cursor: filename>
 Replace cursor graphics when hovering over an event.
 Replace filename with the name of the cursor file from the "img/system/" folder

 5. <hover_image: filename>
 Display image from "img/pictures/" folder
 Replace filename with the image filename
 Example: <hover_image: Actor1_1>

 6. <hover_window: [width|height|text]>
 Display window with text
 width - Window width
 height - Window height
 text - text
 Example: <hover_window: [120|60|\i[2]Text]>

 7. <hover_text: text>
 Display text
 Example: <hover_text: Test>

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 To use the plugin in commercial projects, you must be my subscriber on patreon
 https://www.patreon.com/dkplugins

 ###===========================================================================
 ## Support
 ###===========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

 * @param defaultCursor
 * @text Default Cursor
 * @desc Default cursor
 * @type file
 * @dir img/system/

 * @param iconSynonyms
 * @text Icon synonyms
 * @desc Icon synonyms
 * @type struct<IconSynonym>[]
 * @default []

 * @param transferIcon
 * @text Player transfer icon
 * @desc Automatic display of an icon when hovering over an event that contains this command. 0 - disable.
 * @type number
 * @min 0
 * @default 0

 * @param hoverTextFontSize
 * @text Font size for <hover_text>
 * @desc Font size for <hover_text>
 * @type number
 * @min 1
 * @default 26

*/

/*:ru
 * @plugindesc v.1.1.0 [PRO] Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @help

 ### Информация о плагине ###
 Название: DK_Mouse_System
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.1.0
 Релиз: 12.10.2020
 Первый релиз: 11.09.2020

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###===========================================================================
 ## Инструкции
 ###===========================================================================
 Используйте комментарии события
 1. <hover_icon: iconIndex>
 Отобразить иконку при наведении на событие.
 Замените iconIndex на номер иконки или синоним (не забудьте их настроить!)
 Пример: <hover_icon: 4>
 Пример: <hover_icon: talk>

 2. <click_activate>
 Запустить событие нажатием на него

 3. <hover_activate>
 Запустить событие наведением мыши

 4. <custom_cursor: filename>
 Заменить графику курсора при наведении на событие.
 Замените filename на название файла курсора из папки "img/system/"

 5. <hover_image: filename>
 Отобразить изображение из папки "img/pictures/"
 filename - Название файла
 Пример: <hover_image: Actor1_1>

 6. <hover_window: [width|height|text]>
 Отобразить окно с текстом
 width - Ширина окна
 height - Высота окна
 text - Текст
 Пример: <hover_window: [120|60|\i[2]Text]>

 7. <hover_text: text>
 Отобразить текст
 Пример: <hover_text: Test>

 ###===========================================================================
 ## Лицензия и правила использования плагина
 ###===========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Для использования плагина в коммерческих проектах необходимо быть моим подписчиком на патреоне
 https://www.patreon.com/dkplugins

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

 * @param defaultCursor
 * @text Стандартный курсор
 * @desc Стандартный курсор
 * @type file
 * @dir img/system/

 * @param iconSynonyms
 * @text Синонимы иконок
 * @desc Синонимы иконок
 * @type struct<IconSynonym>[]
 * @default []

 * @param transferIcon
 * @text Иконка перемещения игрока
 * @desc Автоматическое отображение иконки при наведении на событие, которое содержит эту команду. 0 - отключить.
 * @type number
 * @min 0
 * @default 0

 * @param hoverTextFontSize
 * @text Размер шрифта для <hover_text>
 * @desc Размер шрифта для <hover_text>
 * @type number
 * @min 1
 * @default 26

*/

/*~struct~IconSynonym:

 * @param iconIndex
 * @text Icon index
 * @desc Icon index
 * @type number
 * @min 1
 * @default 1

 * @param synonym
 * @text Synonym
 * @desc Synonym

*/

/*~struct~IconSynonym:ru

 * @param iconIndex
 * @text Номер иконки
 * @desc Номер иконки
 * @type number
 * @min 1
 * @default 1

 * @param synonym
 * @text Синоним
 * @desc Синоним

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Mouse_System'] = '1.1.0';

(function() {

    const parameters = PluginManager.parameters('DK_Mouse_System');
    const params = {
        defaultCursor: parameters.defaultCursor,
        iconSynonyms: JSON.parse(parameters.iconSynonyms).map(json => JSON.parse(json)),
        transferIcon: parseInt(parameters.transferIcon) || 0,
        hoverTextFontSize: parseInt(parameters.hoverTextFontSize) || 26
    };

    //===========================================================================
    // TouchInput
    //===========================================================================

    // methods

    const MouseSystem_TouchInput_initialize = TouchInput.initialize;
    TouchInput.initialize = function() {
        MouseSystem_TouchInput_initialize.apply(this, arguments);
        this._cursorOffset = { x: 0, y: 0 };
        this.resetCursorImage();
    };

    TouchInput.hideCursor = function() {
        this._cursorHidden = true;
        document.body.style.cursor = 'none';
    };

    TouchInput.showCursor = function() {
        if (this._cursorHidden) {
            this._cursorHidden = false;
            this._updateCursor();
        }
    };

    TouchInput.setCursorOffset = function(offset) {
        if (this._cursorOffset.x !== offset.x || this._cursorOffset.y !== offset.y) {
            this._cursorOffset = offset;
            this._updateCursor();
        }
    };

    TouchInput.setCursorImage = function(image) {
        if (this._cursorImage !== image) {
            this._cursorImage = image;
            this._updateCursor();
        }
    };

    TouchInput.resetCursorImage = function() {
        this.setCursorImage(params.defaultCursor);
    };

    const MouseSystem_TouchInput_onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function(event) {
        MouseSystem_TouchInput_onMouseMove.apply(this, arguments);

        if (Utils.RPGMAKER_NAME === 'MV') {
            const x = Graphics.pageToCanvasX(event.pageX);
            const y = Graphics.pageToCanvasY(event.pageY);

            this._onMove(x, y);
        }

        const scene = SceneManager._scene;

        if (scene instanceof Scene_Map && scene.isActive() && !$gameMessage.isBusy()) {
            scene.checkUnderMouseEvents(this._x, this._y);
        } else {
            this.resetCursorImage();
        }
    };

    const MouseSystem_TouchInput_onTrigger = TouchInput._onTrigger;
    TouchInput._onTrigger = function(x, y) {
        if (this._activateClickEvents(x, y)) {
            $gameTemp.clearDestination();
        } else {
            MouseSystem_TouchInput_onTrigger.apply(this, arguments);
        }
    };

    TouchInput._activateClickEvents = function(x, y) {
        const scene = SceneManager._scene;

        if (scene instanceof Scene_Map && scene.isActive() && !$gameMessage.isBusy()) {
            const mapX = $gameMap.canvasToMapX(x);
            const mapY = $gameMap.canvasToMapY(y);

            return $gameMap.eventsXy(mapX, mapY).some((event) => {
                if (event._erased) {
                    return false;
                }

                if (event.mouseSettings.clickActivate) {
                    event.start();

                    return true;
                }

                return false;
            });
        }

        return false;
    };

    TouchInput._updateCursor = function() {
        if (this._cursorHidden) {
            document.body.style.cursor = 'none';
            return;
        }

        const cursorImage = this._cursorImage || params.defaultCursor;

        if (cursorImage) {
            const path = `img/system/${cursorImage}.png`;
            const { x, y } = this._cursorOffset;

            document.body.style.cursor = `url('${path}') ${x} ${y}, default`;
        } else {
            document.body.style.cursor = 'default';
        }
    };

    //===========================================================================
    // Game_Event
    //===========================================================================

    const MouseSystem_Game_Event_setupPage = Game_Event.prototype.setupPage;
    Game_Event.prototype.setupPage = function() {
        MouseSystem_Game_Event_setupPage.apply(this, arguments);
        this.setupMouseSettings();
    };

    Game_Event.prototype.setupMouseSettings = function() {
        this.mouseSettings = {};

        if (this._erased) {
            return;
        }

        const comments = this.getComments();

        comments.forEach((comment) => {
            if (!this.mouseSettings.hoverWindow && comment.match(/<hover_window:\s*\[(.+)]>/i)) {
                const data = RegExp.$1.split('|');

                this.mouseSettings.hoverWindow = {
                    width: parseInt(data[0]),
                    height: parseInt(data[1]),
                    text: data[2].trim()
                };
            } else if (!this.mouseSettings.hoverText && comment.match(/<hover_text:\s*(\w+)>/i)) {
                this.mouseSettings.hoverText = RegExp.$1.trim();
            } else if (!this.mouseSettings.hoverImage && comment.match(/<hover_image:\s*(\w+)>/i)) {
                this.mouseSettings.hoverImage = RegExp.$1;
            } else if (!this.mouseSettings.hoverIcon && comment.match(/<hover_icon:\s*(\w+)>/i)) {
                let iconIndex = RegExp.$1;

                if (Number.isFinite(parseInt(iconIndex))) {
                    iconIndex = parseInt(iconIndex);
                } else {
                    const synonym = params.iconSynonyms.find(data => data.synonym === iconIndex);

                    if (synonym) {
                        iconIndex = parseInt(synonym.iconIndex);
                    }
                }

                this.mouseSettings.hoverIcon = iconIndex;
            } else if (!this.mouseSettings.clickActivate && comment.match(/<click_activate>/i)) {
                this.mouseSettings.clickActivate = true;
            } else if (!this.mouseSettings.hoverActivate && comment.match(/<hover_activate>/i)) {
                this.mouseSettings.hoverActivate = true;
            } else if (!this.mouseSettings.customCursor && comment.match(/<custom_cursor:\s*(.*?)>/i)) {
                this.mouseSettings.customCursor = RegExp.$1;
            }
        });

        if (!this.mouseSettings.hoverIcon && params.transferIcon > 0) {
            if (this.getPageCommands(201).length > 0) {
                this.mouseSettings.hoverIcon = params.transferIcon;
            }
        }
    };

    Game_Event.prototype.getPageCommands = function(code) {
        const page = this.page();
        const list = (page ? page.list : null);

        if (code === undefined) {
            return list || [];
        }

        return (list ?
            list.filter((command) => command.code === code)
            : []);
    };

    Game_Event.prototype.getComments = function() {
        const page = this.page();
        const list = (page ? page.list : null);

        return (list ? list.reduce((comments, command) => {
            if (command.code === 108 || command.code === 408) {
                comments.push(command.parameters[0]);
            }

            return comments;
        }, []) : []);
    };

    //===========================================================================
    // Scene_Boot
    //===========================================================================

    const MouseSystem_Scene_Boot_initialize = Scene_Boot.prototype.initialize;
    Scene_Boot.prototype.initialize = function() {
        MouseSystem_Scene_Boot_initialize.apply(this, arguments);

        if (Imported['DKTools'] && DKToolsParam.get('Cursor Graphic', 'Enabled')) {
            throw new Error('Disable function "Cursor Graphic" in the DKTools plugin!');
        }
    };

    //===========================================================================
    // Scene_Map
    //===========================================================================

    const MouseSystem_Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
    Scene_Map.prototype.createSpriteset = function() {
        MouseSystem_Scene_Map_createSpriteset.apply(this, arguments);
        this.createMouseSystemSprite();
    };

    const MouseSystem_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        MouseSystem_Scene_Map_createAllWindows.apply(this, arguments);
        this.createMouseSystemWindow();
    };

    Scene_Map.prototype.createMouseSystemSprite = function() {
        this._mouseSystemSprite = new Sprite();

        this._mouseSystemSprite.anchor.set(0.5, 0.5);
        this._mouseSystemSprite.drawIcon = Window_Base.prototype.drawIcon;
        this._mouseSystemSprite.createIconBitmap = function() {
            const width = Utils.RPGMAKER_NAME === 'MV' ?
                Window_Base._iconWidth : ImageManager.iconWidth;
            const height = Utils.RPGMAKER_NAME === 'MV' ?
                Window_Base._iconHeight : ImageManager.iconHeight;

            this.bitmap = new Bitmap(width, height);
            this.contents = this.bitmap;
        }.bind(this._mouseSystemSprite);
        this._mouseSystemSprite.drawText = function(text) {
            const temp = this.bitmap || new Bitmap();
            temp.fontSize = params.hoverTextFontSize;

            const width = Math.ceil(temp.measureTextWidth(text));
            const height = 36;

            this.bitmap = new Bitmap(width, height);
            this.bitmap.fontSize = temp.fontSize;
            this.bitmap.drawText(text, 0, 0, this.width, this.height, 'center');
            this.text = text;
        }.bind(this._mouseSystemSprite);

        this._mouseSystemSprite.visible = true;

        this.addChild(this._mouseSystemSprite);
    };

    Scene_Map.prototype.createMouseSystemWindow = function() {
        if (Utils.RPGMAKER_NAME === 'MV') {
            this._mouseSystemWindow = new Window_Base(0, 0, 0, 0);
        } else {
            this._mouseSystemWindow = new Window_Base(new Rectangle(0, 0, 0, 0));
        }

        this._mouseSystemWindow.visible = true;

        this.addWindow(this._mouseSystemWindow);
    };

    Scene_Map.prototype.checkUnderMouseEvents = function(x, y) {
        const mapX = $gameMap.canvasToMapX(x);
        const mapY = $gameMap.canvasToMapY(y);
        const events = $gameMap.eventsXy(mapX, mapY);
        const sprite = this._mouseSystemSprite;
        const window = this._mouseSystemWindow;

        sprite.visible = false;
        window.visible = false;

        TouchInput.resetCursorImage();
        TouchInput.showCursor();

        if (events.length === 0) {
            delete sprite.iconIndex;
            delete sprite.text;
            delete window.text;
        }

        events.forEach((event) => {
            const mouseSettings = event.mouseSettings;

            if (mouseSettings.hoverWindow) {
               

                const data = mouseSettings.hoverWindow;
                const width = window.width === data.width ?
                    window.width : data.width;
                const height = window.height === data.height ?
                    window.height : data.height;

                window.visible = true;
                //window.move(x + 6, y + 8, width, height);
				window.move(0, 458, width, height);

                if (window.text !== data.text) {
                    window.createContents();
                    window.drawTextEx(data.text, 0, 0);
                    window.text = data.text;
                }
            } else if (mouseSettings.hoverText) {
                TouchInput.hideCursor();

                if (sprite.text !== mouseSettings.hoverText) {
                    sprite.drawText(mouseSettings.hoverText);
                }

                sprite.visible = true;
                sprite.move(x, y);
            } else if (mouseSettings.hoverImage) {
                TouchInput.hideCursor();

                sprite.bitmap = ImageManager.loadPicture(mouseSettings.hoverImage);
                sprite.visible = true;
                sprite.move(x, y);

                delete sprite.iconIndex;
            } else if (mouseSettings.hoverIcon) {
                const iconIndex = mouseSettings.hoverIcon;

                TouchInput.hideCursor();

                if (sprite.iconIndex !== iconIndex) {
                    sprite.iconIndex = iconIndex;
                    sprite.createIconBitmap();
                    sprite.drawIcon(iconIndex, 0, 0);
                }

                sprite.visible = true;
                sprite.move(x, y);
            }

            if (mouseSettings.hoverActivate) {
                event.start();
            }

            if (mouseSettings.customCursor) {
                TouchInput.setCursorImage(mouseSettings.customCursor);
            }
        });
    };

}());
