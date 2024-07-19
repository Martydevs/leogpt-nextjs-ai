export interface KindeUser {
  id:           string;
  email:        string;
  family_name:  string;
  given_name:   string;
  picture:      null;
  username:     string;
  phone_number: string;
  properties:   Properties;
}

export interface Properties {
  usr_city:             string;
  usr_industry:         string;
  usr_job_title:        string;
  usr_middle_name:      string;
  usr_postcode:         string;
  usr_salutation:       string;
  usr_state_region:     string;
  usr_street_address:   string;
  usr_street_address_2: string;
}
