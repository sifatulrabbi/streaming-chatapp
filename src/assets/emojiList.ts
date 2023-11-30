const emojis = [
    "\ud83d\ude00", // 😀
    "\ud83d\ude03", // 😃
    "\ud83d\ude04", // 😄
    "\ud83d\ude01", // 😁
    "\ud83d\ude06", // 😆
    "\ud83d\ude05", // 😅
    "\ud83d\ude02", // 😂
    "\ud83e\udd23", // 🤣
    "\ud83e\udd7a", // 🥲
    "\ud83e\udd79", // 🥹
    "\ud83d\ude0a", // 😊
    "\ud83d\ude07", // 😇
    "\ud83d\ude42", // 🙂
    "\ud83d\ude43", // 🙃
    "\ud83d\ude09", // 😉
    "\ud83d\ude0c", // 😌
    "\ud83d\ude0d", // 😍
    "\ud83e\udd70", // 🥰
    "\ud83d\ude18", // 😘
    "\ud83d\ude17", // 😗
    "\ud83d\ude19", // 😙
    "\ud83d\ude1a", // 😚
    "\ud83d\ude0b", // 😋
    "\ud83d\ude1b", // 😛
    "\ud83d\ude1d", // 😝
    "\ud83d\ude1c", // 😜
    "\ud83e\udd2a", // 🤪
    "\ud83e\udd28", // 🤨
    "\ud83e\udd13", // 🧐
    "\ud83d\ude0e", // 😎
    "\ud83e\udd78", // 🥸
    "\ud83e\udd29", // 🤩
    "\ud83e\udd73", // 🥳
    "\ud83d\ude0f", // 😏
    "\ud83d\ude12", // 😒
    "\ud83d\ude1e", // 😞
    "\ud83d\ude14", // 😔
    "\ud83d\ude1f", // 😟
    "\ud83d\ude15", // 😕
    "\ud83d\ude41", // 🙁
    "\ud83d\ude23", // 😣
    "\ud83d\ude16", // 😖
    "\ud83d\ude2b", // 😫
    "\ud83d\ude29", // 😩
    "\ud83d\ude22", // 😢
    "\ud83d\ude2d", // 😭
    "\ud83d\ude31\ud83c\udf2b", // 😮‍💨
    "\ud83d\ude24", // 😤
    "\ud83d\ude20", // 😠
    "\ud83d\ude21", // 😡
    "\ud83e\udd2c", // 🤬
    "\ud83e\udd2f", // 🤯
    "\ud83d\ude33", // 😳
    "\ud83e\udd75", // 🥵
    "\ud83e\udd76", // 🥶
    "\ud83d\ude31", // 😱
    "\ud83d\ude28", // 😨
    "\ud83d\ude30", // 😰
    "\ud83d\ude25", // 😥
    "\ud83d\ude13", // 😓
]

type EmojiContent = {
    name: string
    content: string
}

export const emojiList = () => {
    const list: EmojiContent[] = []
    for (let i = 0; i < emojis.length; i++) {
        const e = emojis[i]
        list.push({ name: `my-emoji-${e}`, content: e })
    }
    return list
}
