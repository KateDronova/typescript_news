enum Colors {
    Light = 'light',
    Grape = 'grape',
    Blue = 'blue',
    Dark = 'dark'
}
type ColorButtons = keyof typeof Colors;

class ChangeColor {
    changeBackgroundColor(key: ColorButtons) {
        const body = document.querySelector('body') as Element;
        const color = Colors[key];
        const classToAdd = color;
        body.classList.remove('light', 'grape', 'blue', 'dark');
        body.classList.add(classToAdd);
    }
}

export default ChangeColor;
