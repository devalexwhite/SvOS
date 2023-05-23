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
	if (size > 1024) {
		size /= 1024;

		if (size > 1024) {
			size /= 1024;
			if (size > 1024) {
				size /= 1024;
				if (size > 1024) {
					return `${size.toFixed(1)} TB`;
				}
				return `${size.toFixed(1)} GB`;
			}

			return `${size.toFixed(1)} MB`;
		}
		return `${size.toFixed(1)} KB`;
	}

	return `${size.toFixed(1)} bytes`;
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
