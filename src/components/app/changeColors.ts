enum Colors {
    Light = 'light',
    Grape = 'grape',
    Blue = 'blue',
    Dark = 'dark'
}
type ColorButtons = keyof typeof Colors;

class ChangeColor {
    changeBackgroundColor(key: ColorButtons) {
        const body = <HTMLBodyElement>document.querySelector('body');
        const color = Colors[key];
        const classToAdd = color;
        for (key in Colors) {
            body.classList.remove(Colors[key]);
        }
        body.classList.add(classToAdd);
    }
}

export default ChangeColor;
