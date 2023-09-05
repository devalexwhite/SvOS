import { FileType } from './FileTypes';

const fs = import.meta.glob('../../../static/fs/**/*', { as: 'raw' });

const loadFS = async () => {
	const files = [
		{
			name: 'fs',
			type: FileType.folder,
			fullpath: '/',
			size: 0,
			children: []
		}
	];
	for (const path in fs) {
		const data = await fs[path]();
		const file = buildFile(path, data);

		const dirs = file.fullpath.split('/');
		dirs.pop();

		let i = files[0];
		for (const dir of dirs) {
			if (dir == 'fs') continue;

			const target = i.children.find((f) => f.name == dir && f.type.name == 'Folder');

			if (target) i = target;
			else {
				const directory = {
					name: dir,
					type: FileType.folder,
					fullpath: i.fullpath + `/${i.name}`,
					children: [],
					size: 0
				};
				i.children.push(directory);
				i = directory;
			}
		}

		i.children.push(file);
		i.size = `${i.children.length} file${i.children.length > 1 ? 's' : ''}`;
	}

	return files;
};

const sizeString = (size) => {
	const fixedFormat = (num) => (num % 1 == 0 ? num : num.toFixed(1));
	if (size > 1024) {
		size /= 1024;

		if (size > 1024) {
			size /= 1024;
			if (size > 1024) {
				size /= 1024;
				if (size > 1024) {
					return `${fixedFormat(size)} TB`;
				}
				return `${fixedFormat(size)} GB`;
			}
			return `${fixedFormat(size)} MB`;
		}
		return `${fixedFormat(size)} kB`;
	}

	return `${fixedFormat(size)} bytes`;
};

const buildFile = (path, data) => {
	const name = path.replace(/^.*[\\\/]/, '');

	const ext = name.match(/\.[0-9a-z]+$/i, '')[0];

	const file = {
		name,
		size: sizeString(data.length),
		fullpath: path.replace('../../../static/', ''),
		data
	};

	switch (ext) {
		case '.pdf':
			file.type = FileType.pdf;
			break;
		case '.txt':
		case '.doc':
		case '.docx':
		case '.odf':
		case '.md':
		case '.json':
			file.type = FileType.document;
			break;
		case '.png':
		case '.webp':
		case '.jpg':
		case '.jpeg':
		case '.gif':
			file.type = FileType.image;
			break;
		default:
			file.type = FileType.unknown;
	}

	return file;
};

export const LsDir = async (pathname) => {
	const fs = await loadFS();
	const dirs = pathname.split('/');
	let i = fs[0];

	for (const dir of dirs) {
		if (dir.trim() == '' || dir == 'fs') continue;
		const target = i.children.find((f) => f.name == dir && f.type.name == 'Folder');

		if (target) i = target;
	}
	return i.children;
};
