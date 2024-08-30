# CONVERSU CHAT
Chat bot components library used by Conversu


## INSTALL

Using yarn

```base
yarn add @conversu/chat
```

Using npm 

```base
npm i @conversu/chat
```

## USAGE

Preset the providers follow this sequence:


```react
<Chat.Theme.Provider>
    <Chat.Options.Provider>
        <Chat.Control.Provider>
            <Chat.Form.Provider>
                <!-- Chat components -->
            </Chat.Form.Provider>
        </Chat.Control.Provider>
    </Chat.Options.Provider>
</Chat.Theme.Provider>
```

