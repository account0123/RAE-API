## https://rae-api.com/api

### GET /words/{word}

Responses:

- 200 OK
```json
{
  "data": {
    "word": "",
    "meanings": [{...}]
  },
  "ok": true
}
```

- 404 Not Found
```json
{
  "error": "NOT_FOUND",
  "ok": false
}
```

## Models

### Meaning

{
    "conjugations": {
        "non_personal": Non-Personal Conjugation,
        "indicative": Indicative Conjugation,
        "subjunctive": Subjunctive Conjugation,
        "imperative": Imperative Tense
    } | undefined,
    "origin": {
        raw: "",
        type: "",
        voice: "",
        text: ""
    } | undefined,
    "senses": Sense[],
}

### Sense

{
    "raw":"",
    "meaning_number": 1,
    "category":"verb",
    "usage":"",
    "description":"",
    "synonyms":string[]|null,
    "antonyms":string[]|null
}


### Indicative Conjugation

{
    "present": Tense,
    "present_perfect": Tense,
    "past_perfect": Tense,
    "preterite": Tense,
    "past_anterior": Tense,
    "future": Tense,
    "future_perfect": Tense,
    "conditional": Tense,
    "conditional_perfect": Tense
}

### Non-Personal Conjugation

{
    "infinitive":"",
    "participle":"",
    "gerund":"",
    "compound_infinitive":"",
    "compound_gerund":""
}

### ImperativeTense
{
    "singular_second_person":"",
    "singular_formal_second_person":"",
    "plural_second_person":"",
    "plural_formal_second_person":""
}

### Subjunctive Conjugation
{
    "present": Tense,
    "present_perfect": Tense,
    "imperfect": Tense,
    "past_perfect": Tense,
    "future": Tense,
    "future_perfect": Tense
}



### Tense
{
    "singular_first_person":"",
    "singular_second_person":"",
    "singular_formal_second_person":"",
    "singular_third_person":"",
    "plural_first_person":"",
    "plural_second_person":"",
    "plural_formal_second_person":"",
    "plural_third_person":""
}