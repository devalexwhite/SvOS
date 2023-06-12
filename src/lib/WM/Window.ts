export enum WindowState {
	open,
	minimized
}

export interface Vector2 {
	x: Number;
	y: Number;
}

export default class Window {
	title: String;
	index: Number;
	state: WindowState;
	position: Vector2;
}
