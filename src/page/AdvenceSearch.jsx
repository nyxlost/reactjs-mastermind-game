import React, { useState } from "react";

const data = {
  west: {
    Kanchanaburi: [
      "Persian",
      "Avestan",
      "Sogdian",
      "Baluchi",
      "Kurdish",
      "Pashto",
    ],
    Tak: [
      "Assamese",
      "Bengali",
      "Gujarati",
      "Hindi",
      "Marathi",
      "Punjabi",
      "Romany",
      "Sindhi",
      "Singhalese",
      "Urdu",
    ],
  },
  north: {
    "Chiang Mai": ["Russian", "Belarusian", "Ukrainian"],
    "Chiang Rai": ["Bulgarian", "Slovenian", "Serbo-Croatian", "Macedonian"],
    Nan: ["Polish", "Czech", "Slovak", "Sorbian"],
  },
  south: {
    Narathiwat: ["Russian", "Belarusian", "Ukrainian"],
    Phuket: ["Bulgarian", "Slovenian", "Serbo-Croatian", "Macedonian"],
    Satun: ["Polish", "Czech", "Slovak", "Sorbian"],
  },
};

const AdvancedSearch = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedProvinces, setSelectedProvinces] = useState({});
  const [selectedLanguages, setSelectedLanguages] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleRegionChange = (region) => {
    setSelectedRegions((prevSelectedRegions) => {
      if (prevSelectedRegions.includes(region)) {
        setSelectedProvinces((prevSelectedProvinces) => {
          const newSelectedProvinces = { ...prevSelectedProvinces };
          delete newSelectedProvinces[region];
          return newSelectedProvinces;
        });
        setSelectedLanguages((prevSelectedLanguages) => {
          const newSelectedLanguages = { ...prevSelectedLanguages };
          delete newSelectedLanguages[region];
          return newSelectedLanguages;
        });
        return prevSelectedRegions.filter((r) => r !== region);
      } else {
        
        const allProvinces = Object.keys(data[region]);

        setSelectedProvinces((prevSelectedProvinces) => ({
          ...prevSelectedProvinces,
          [region]: allProvinces,
        }));
        return [...prevSelectedRegions, region];
      }
    });
    setSearchTerm("");
  };

  const handleProvinceChange = (region, province) => {
    setSelectedProvinces((prevSelectedProvinces) => {
      const regionProvinces = prevSelectedProvinces[region] || [];
      const updatedProvinces = regionProvinces.includes(province)
        ? regionProvinces.filter((p) => p !== province)
        : [...regionProvinces, province];

      return {
        ...prevSelectedProvinces,
        [region]: updatedProvinces,
      };
    });
    setSearchTerm("");
  };

  const handleLanguageChange = (region, province, language) => {
    setSelectedLanguages((prevSelectedLanguages) => {
      const regionLanguages = prevSelectedLanguages[region]?.[province] || [];
      const updatedLanguages = regionLanguages.includes(language)
        ? regionLanguages.filter((lang) => lang !== language)
        : [...regionLanguages, language];

      return {
        ...prevSelectedLanguages,
        [region]: {
          ...prevSelectedLanguages[region],
          [province]: updatedLanguages,
        },
      };
    });
  };

  const filteredRegions = Object.keys(data).filter((region) =>
    region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProvinces = (region) => {
    return Object.keys(data[region]).filter((province) =>
      province.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredLanguages = (region, province) => {
    return data[region][province].filter((language) =>
      language.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="flex justify-center mt-20 min-h-screen h-auto bg-gradient-to-t from-indigo-200">
      <div className="w-4/5 max-w-lg p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <label className="block mb-2 text-xl font-semibold text-gray-700">
          Select Region
        </label>
        {filteredRegions.map((region) => (
          <div key={region} className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedRegions.includes(region)}
                onChange={() => handleRegionChange(region)}
                className="mr-2"
              />
              <span className="capitalize">{region}</span>
            </label>
            {selectedRegions.includes(region) && (
              <div className="ml-6 mt-2">
                {filteredProvinces(region).map((province) => (
                  <div key={province} className="mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedProvinces[region]?.includes(province) || false}
                        onChange={() => handleProvinceChange(region, province)}
                        className="mr-2"
                      />
                      {province}
                    </label>
                    {selectedProvinces[region]?.includes(province) && (
                      <div className="ml-6 mt-2">
                        {filteredLanguages(region, province).map((language) => (
                          <div key={language} className="mb-1">
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                checked={
                                  selectedLanguages[region]?.[province]?.includes(language) || false
                                }
                                onChange={() => handleLanguageChange(region, province, language)}
                                className="mr-2"
                              />
                              {language}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSearch;
