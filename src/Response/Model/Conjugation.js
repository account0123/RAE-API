export class IConjugation {
    constructor(mode) {
        this.mode = mode;
    }
}

export class ImperativeTense extends IConjugation {
    constructor(data) {
        super("imperative");
        this.singular_second_person = data.singular_second_person;
        this.singular_formal_second_person = data.singular_formal_second_person;
        this.plural_second_person = data.plural_second_person;
        this.plural_formal_second_person = data.plural_formal_second_person;
    }
}

export class IndicativeConjugation extends IConjugation {
    constructor(data) {
        super("indicative");
        this.present = data.present;
        this.present_perfect = data.present_perfect;
        this.past_perfect = data.past_perfect;
        this.preterite = data.preterite;
        this.past_anterior = data.past_anterior;
        this.future = data.future;
        this.future_perfect = data.future_perfect;
        this.conditional = data.conditional;
        this.conditional_perfect = data.conditional_perfect;
    }
}

export class NonPersonalConjugation extends IConjugation {
    constructor(data) {
        super("non_personal");
        this.infinitive = data.infinitive;
        this.participle = data.participle;
        this.gerund = data.gerund;
        this.compound_infinitive = data.compound_infinitive;
        this.compound_gerund = data.compound_gerund;
    }
}

export class SubjunctiveConjugation extends IConjugation {
    constructor(data) {
        super("subjunctive");
        this.present = data.present;
        this.present_perfect = data.present_perfect;
        this.imperfect = data.imperfect;
        this.past_perfect = data.past_perfect;
        this.future = data.future;
        this.future_perfect = data.future_perfect;
    }
}