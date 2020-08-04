export interface Rockets {
  name: string;
  success: boolean;
  static_fire_date_utc: string;
  failures: [];
  links: {
    webcast: string;
    flickr: {
      original: []
    }
  }
}
