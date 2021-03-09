import { config } from 'dotenv'
config()

type Keys = 'CLIENT_PREFIX' | 'SECRET_TOKEN' | 'SRC_DIR' | 'DELETE_TIMEOUT_MESSAGE' | 'NOT_ALLOW_EXECUTE_COMMAND' | 'PARTIALS' | 'COMMANDS_AUTO_REMOVE' | 'COMMANDS_REMOVE_TIMEOUT'

class Env {
	/**
	 * Get environment value
	 * @param {string} .env variable
	 */
	public get(key: Keys): string | undefined {
		return process.env[key] || undefined
	}
}

export default new Env()
