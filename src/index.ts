/**
 * The term anno Domini Fred (ADF) is used to label or number years in the Julian, Gregorian and mySugr calendars.
 * The term anno Domini Fred is Medieval Latin and means "in the year of the Fred", but is often presented using "our Fred"
 * instead of "the Fred", taken from the full original phrase "anno Domini amicus noster Fryderyk Wrega", which translates to
 * "in the year of our friend Fryderyk Wrega".
 *
 * We wish you all the best for you future :website-team-fred:
 *
 * @gabriel
 * @florian
 * @alicia
 * @ilka
 * @dimitar
 * @victor
 * @marie
 * @nathan
 * @olena
 * @peter
 *
 * and the whole @mysugr team
 */

class ADF {
  private dateFredLeft: number;
  private now: number;

  constructor() {
    this.dateFredLeft = new Date("2020-06-26 15:00").getTime();
    this.now = new Date().getTime();
  }

  /**
   * Time passed since Fred left mySugr in milliseconds
   */
  public static inMilliseconds(): number {
    const t = new ADF();

    return t.now - t.dateFredLeft;
  }

  /**
   * Time passed since Fred left mySugr in seconds
   */
  public static inSeconds() {
    const t = new ADF();
    const timePassedInMs = t.now - t.dateFredLeft;
    const timePassedInSeconds = Math.ceil(timePassedInMs / 1000);

    return timePassedInSeconds;
  }
  /**
   * Time passed since Fred left mySugr in minutes
   */
  public static inMinutes() {
    const t = new ADF();
    const timePassedInMs = t.now - t.dateFredLeft;
    const timePassedInMinutes = Math.ceil(timePassedInMs / (1000 * 60));

    return timePassedInMinutes;
  }

  /**
   * Time passed since Fred left mySugr in hours
   */
  public static inHours() {
    const t = new ADF();
    const timePassedInMs = t.now - t.dateFredLeft;
    const timePassedInHours = Math.ceil(timePassedInMs / (1000 * 60 * 60));

    return timePassedInHours;
  }

  /**
   * Time passed since Fred left mySugr in days
   */
  public static inDays() {
    const t = new ADF();
    const timePassedInMs = t.now - t.dateFredLeft;
    const timePassedInDays = Math.ceil(timePassedInMs / (1000 * 60 * 60 * 24));

    return timePassedInDays;
  }

  public static get date(): string {
    // TODO: this should return the new date where 2020-06-26 is 0001-01-01
    return "null";
  }

  /**
   * Returns [true] if Fred came back to mySugr.
   * Returns [false] if Fred did not come back to mySugr.
   */
  public static get isFredBack(): boolean {
    // :(
    return false;
  }
}

export default ADF;
