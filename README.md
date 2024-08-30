![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


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

