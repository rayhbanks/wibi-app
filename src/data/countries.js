const countries = [
  // -------------------------
  // UNITED NATIONS MEMBERS
  // -------------------------
  {
    name: 'Afghanistan',
    code: 'AF',
  },
  {
    name: 'Albania',
    code: 'AL',
  },
  {
    name: 'Algeria',
    code: 'DZ',
  },
  {
    name: 'Andorra',
    code: 'AD',
  },
  {
    name: 'Angola',
    code: 'AO',
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
  },
  {
    name: 'Argentina',
    code: 'AR',
  },
  {
    name: 'Armenia',
    code: 'AM',
  },
  {
    name: 'Australia',
    code: 'AU',
  },
  {
    name: 'Austria',
    code: 'AT',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
  },
  {
    name: 'Bahamas',
    code: 'BS',
  },
  {
    name: 'Bahrain',
    code: 'BH',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
  },
  {
    name: 'Barbados',
    code: 'BB',
  },
  {
    name: 'Belarus',
    code: 'BY',
  },
  {
    name: 'Belgium',
    code: 'BE',
  },
  {
    name: 'Belize',
    code: 'BZ',
  },
  {
    name: 'Benin',
    code: 'BJ',
  },
  {
    name: 'Bhutan',
    code: 'BT',
  },
  {
    name: 'Bolivia',
    code: 'BO',
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
  },
  {
    name: 'Botswana',
    code: 'BW',
  },
  {
    name: 'Brazil',
    code: 'BR',
  },
  {
    name: 'Brunei',
    code: 'BN',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
  },
  {
    name: 'Burundi',
    code: 'BI',
  },
  {
    name: 'Côte d’Ivoire',
    code: 'CI',
  },
  {
    name: 'Cabo Verde',
    code: 'CV',
  },
  {
    name: 'Cambodia',
    code: 'KH',
  },
  {
    name: 'Cameroon',
    code: 'CM',
  },
  {
    name: 'Canada',
    code: 'CA',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
  },
  {
    name: 'Chad',
    code: 'TD',
  },
  {
    name: 'Chile',
    code: 'CL',
  },
  {
    name: 'China',
    code: 'CN',
  },
  {
    name: 'Colombia',
    code: 'CO',
  },
  {
    name: 'Comoros',
    code: 'KM',
  },
  {
    name: 'Congo, Republic of the',
    code: 'CG',
  },
  {
    name: 'Congo, Democratic Republic of the',
    code: 'CD',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
  },
  {
    name: 'Croatia',
    code: 'HR',
  },
  {
    name: 'Cuba',
    code: 'CU',
  },
  {
    name: 'Cyprus',
    code: 'CY',
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
  },
  {
    name: 'Denmark',
    code: 'DK',
  },
  {
    name: 'Djibouti',
    code: 'DJ',
  },
  {
    name: 'Dominica',
    code: 'DM',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
  },
  {
    name: 'Ecuador',
    code: 'EC',
  },
  {
    name: 'Egypt',
    code: 'EG',
  },
  {
    name: 'El Salvador',
    code: 'SV',
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
  },
  {
    name: 'Eritrea',
    code: 'ER',
  },
  {
    name: 'Estonia',
    code: 'EE',
  },
  {
    name: 'Eswatini',
    code: 'SZ',
  },
  {
    name: 'Ethiopia',
    code: 'ET',
  },
  {
    name: 'Fiji',
    code: 'FJ',
  },
  {
    name: 'Finland',
    code: 'FI',
  },
  {
    name: 'France',
    code: 'FR',
  },
  {
    name: 'Gabon',
    code: 'GA',
  },
  {
    name: 'Gambia',
    code: 'GM',
  },
  {
    name: 'Georgia',
    code: 'GE',
  },
  {
    name: 'Germany',
    code: 'DE',
  },
  {
    name: 'Ghana',
    code: 'GH',
  },
  {
    name: 'Greece',
    code: 'GR',
  },
  {
    name: 'Grenada',
    code: 'GD',
  },
  {
    name: 'Guatemala',
    code: 'GT',
  },
  {
    name: 'Guinea',
    code: 'GN',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
  },
  {
    name: 'Guyana',
    code: 'GY',
  },
  {
    name: 'Haiti',
    code: 'HT',
  },
  {
    name: 'Honduras',
    code: 'HN',
  },
  {
    name: 'Hungary',
    code: 'HU',
  },
  {
    name: 'Iceland',
    code: 'IS',
  },
  {
    name: 'India',
    code: 'IN',
  },
  {
    name: 'Indonesia',
    code: 'ID',
  },
  {
    name: 'Iran',
    code: 'IR',
  },
  {
    name: 'Iraq',
    code: 'IQ',
  },
  {
    name: 'Ireland',
    code: 'IE',
  },
  {
    name: 'Israel',
    code: 'IL',
  },
  {
    name: 'Italy',
    code: 'IT',
  },
  {
    name: 'Jamaica',
    code: 'JM',
  },
  {
    name: 'Japan',
    code: 'JP',
  },
  {
    name: 'Jordan',
    code: 'JO',
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
  },
  {
    name: 'Kenya',
    code: 'KE',
  },
  {
    name: 'Kiribati',
    code: 'KI',
  },
  {
    name: 'Korea, North',
    code: 'KP',
  },
  {
    name: 'Korea, South',
    code: 'KR',
  },
  {
    name: 'Kosovo',
    code: 'XK',
  },
  {
    name: 'Kuwait',
    code: 'KW',
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
  },
  {
    name: 'Laos',
    code: 'LA',
  },
  {
    name: 'Latvia',
    code: 'LV',
  },
  {
    name: 'Lebanon',
    code: 'LB',
  },
  {
    name: 'Lesotho',
    code: 'LS',
  },
  {
    name: 'Liberia',
    code: 'LR',
  },
  {
    name: 'Libya',
    code: 'LY',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
  },
  {
    name: 'Lithuania',
    code: 'LT',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
  },
  {
    name: 'Macedonia (North Macedonia)',
    code: 'MK',
  },
  {
    name: 'Madagascar',
    code: 'MG',
  },
  {
    name: 'Malawi',
    code: 'MW',
  },
  {
    name: 'Malaysia',
    code: 'MY',
  },
  {
    name: 'Maldives',
    code: 'MV',
  },
  {
    name: 'Mali',
    code: 'ML',
  },
  {
    name: 'Malta',
    code: 'MT',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
  },
  {
    name: 'Mauritania',
    code: 'MR',
  },
  {
    name: 'Mauritius',
    code: 'MU',
  },
  {
    name: 'Mexico',
    code: 'MX',
  },
  {
    name: 'Micronesia',
    code: 'FM',
  },
  {
    name: 'Moldova',
    code: 'MD',
  },
  {
    name: 'Monaco',
    code: 'MC',
  },
  {
    name: 'Mongolia',
    code: 'MN',
  },
  {
    name: 'Montenegro',
    code: 'ME',
  },
  {
    name: 'Morocco',
    code: 'MA',
  },
  {
    name: 'Mozambique',
    code: 'MZ',
  },
  {
    name: 'Myanmar (Burma)',
    code: 'MM',
  },
  {
    name: 'Namibia',
    code: 'NA',
  },
  {
    name: 'Nauru',
    code: 'NR',
  },
  {
    name: 'Nepal',
    code: 'NP',
  },
  {
    name: 'Netherlands',
    code: 'NL',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
  },
  {
    name: 'Nicaragua',
    code: 'NI',
  },
  {
    name: 'Niger',
    code: 'NE',
  },
  {
    name: 'Nigeria',
    code: 'NG',
  },
  {
    name: 'Norway',
    code: 'NO',
  },
  {
    name: 'Oman',
    code: 'OM',
  },
  {
    name: 'Pakistan',
    code: 'PK',
  },
  {
    name: 'Palau',
    code: 'PW',
  },
  {
    name: 'Panama',
    code: 'PA',
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
  },
  {
    name: 'Paraguay',
    code: 'PY',
  },
  {
    name: 'Peru',
    code: 'PE',
  },
  {
    name: 'Philippines',
    code: 'PH',
  },
  {
    name: 'Poland',
    code: 'PL',
  },
  {
    name: 'Portugal',
    code: 'PT',
  },
  {
    name: 'Qatar',
    code: 'QA',
  },
  {
    name: 'Romania',
    code: 'RO',
  },
  {
    name: 'Russia',
    code: 'RU',
  },
  {
    name: 'Rwanda',
    code: 'RW',
  },
  {
    name: 'St Kitts and Nevis',
    code: 'KN',
  },
  {
    name: 'St Lucia',
    code: 'LC',
  },
  {
    name: 'St Vincent and the Grenadines',
    code: 'VC',
  },
  {
    name: 'Samoa',
    code: 'WS',
  },
  {
    name: 'San Marino',
    code: 'SM',
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
  },
  {
    name: 'Senegal',
    code: 'SN',
  },
  {
    name: 'Serbia',
    code: 'RS',
  },
  {
    name: 'Seychelles',
    code: 'SC',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
  },
  {
    name: 'Singapore',
    code: 'SG',
  },
  {
    name: 'Slovakia',
    code: 'SK',
  },
  {
    name: 'Slovenia',
    code: 'SI',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
  },
  {
    name: 'Somalia',
    code: 'SO',
  },
  {
    name: 'South Africa',
    code: 'ZA',
  },
  {
    name: 'South Sudan',
    code: 'SS',
  },
  {
    name: 'Spain',
    code: 'ES',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
  },
  {
    name: 'Sudan',
    code: 'SD',
  },
  {
    name: 'Suriname',
    code: 'SR',
  },
  {
    name: 'Sweden',
    code: 'SE',
  },
  {
    name: 'Switzerland',
    code: 'CH',
  },
  {
    name: 'Syria',
    code: 'SY',
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
  },
  {
    name: 'Tanzania',
    code: 'TZ',
  },
  {
    name: 'Thailand',
    code: 'TH',
  },
  {
    name: 'Timor-Leste (East Timor)',
    code: 'TL',
  },
  {
    name: 'Togo',
    code: 'TG',
  },
  {
    name: 'Tonga',
    code: 'TO',
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
  },
  {
    name: 'Tunisia',
    code: 'TN',
  },
  {
    name: 'Turkey',
    code: 'TR',
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
  },
  {
    name: 'Uganda',
    code: 'UG',
  },
  {
    name: 'Ukraine',
    code: 'UA',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
  },
  {
    name: 'United States',
    code: 'US',
  },
  {
    name: 'Uruguay',
    code: 'UY',
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
  },
  {
    name: 'Vatican City (Holy See)',
    code: 'VA',
  },
  {
    name: 'Venezuela',
    code: 'VE',
  },
  {
    name: 'Vietnam',
    code: 'VN',
  },
  {
    name: 'Yemen',
    code: 'YE',
  },
  {
    name: 'Zambia',
    code: 'ZM',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
  },

  // ---------------------------------
  // ADDITIONAL / DISPUTED TERRITORIES
  // ---------------------------------
  {
    name: 'Taiwan',
    code: 'TW',
  },
  {
    name: 'Palestine',
    code: 'PS',
  },
  {
    name: 'Western Sahara',
    code: 'EH',
  },
  {
    name: 'Northern Cyprus',
    code: 'NCYP', // Not an official ISO code
  },
  {
    name: 'Nagorno-Karabakh Republic (Artsakh)',
    code: 'NKR', // Not an official ISO code
  },
  {
    name: 'Abkhazia',
    code: 'ABH', // Not an official ISO code
  },
  {
    name: 'South Ossetia',
    code: 'SOssetia', // Not an official ISO code
  },
  {
    name: 'Transnistria',
    code: 'TN', // Not an official ISO code
  },
  {
    name: 'Tibet',
    code: 'TI', // Not an official ISO code
  },
  {
    name: 'Hong Kong',
    code: 'HK',
  },

  // ---------------------------------
  // FORMER COUNTRIES 
  // ---------------------------------
  {
    name: 'Czechoslovakia (former)',
    code: 'CSK', // Not official anymore
  },
  {
    name: 'Soviet Union (USSR)',
    code: 'SU', // Not official anymore
  },
  {
    name: 'Yugoslavia (former)',
    code: 'YU', // Not official anymore
  },
  {
    name: 'East Germany (GDR)',
    code: 'DDR', // Not official anymore
  },
  {
    name: 'South Yemen (People’s Democratic Republic of Yemen)',
    code: 'YD', // Not official anymore
  },
  {
    name: 'Serbia and Montenegro (former)',
    code: 'CS', // Old ISO code
  },
];

export default countries;
