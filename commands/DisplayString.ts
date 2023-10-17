import { BaseCommand, flags } from '@adonisjs/core/build/standalone'

export default class DisplayString extends BaseCommand {
  public static commandName = 'display:string'
  public static description = 'Display a string'

  public static settings = {
    loadApp: false,
  }

  @flags.string({ description: 'string to display' })
  public readonly str: string;

  public async run() {
    // For: node ace display:string --str 111111111111111111111111
    // This will log 1.1111111111111111e+23
    this.logger.info(this.str)
  }
}
