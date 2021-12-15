import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          icon
          title
          description
        }
        temperature {
          actual
          min
          max
          feelsLike
        }
        wind {
          deg
          speed
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;
