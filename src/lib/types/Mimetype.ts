import Icon from './Icon';

export default interface Mimetype {
	name: string;
	icon: Icon;
	launch?: string | undefined;
}
