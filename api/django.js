/**
 * Get json via Djago Rest Framework
 */
const config = require('../nuxt.config.js')
const axios = require('axios')
const endpoint = config.env.djApiBaseUrl

/*
 * 記事一覧を取得する関数
 * @param {int} per_page
 * @param {it} page
 * return {Array}
 */
export const getPosts = (per_page=10, page=1) => {
	const url = `${endpoint}/posts?per_page=${per_page}&page=${page}`
	return axios.get(url)
		.then((response) => {
			return response
		})
		.catch((error) => {
			// throw new Error(`記事一覧が読み込めませんでした  ${url} ${error.message}`)
		})
}
