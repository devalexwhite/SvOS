import userConfig from "../config.json"

const iconTheme = userConfig.theme.icon

export const getIconPath = (category = "", name = "") => {
	return `/fs/themes/icon/${iconTheme}/${category}/scalable/${name}.svg`
}