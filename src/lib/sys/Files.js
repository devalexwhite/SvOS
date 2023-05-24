import { FileType } from './FileTypes';

const fs = import.meta.glob('../../../static/fs/**/*', { as: 'raw' });

export const loadDir = async () => {
	const files = [];
	for (const path in fs) {
		const data = await fs[path]();
		const file = buildFile(path, data);
		files.push(file);
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
	return await loadDir();
};
