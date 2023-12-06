<template>
    <div id="membership-wizard">
        <div class="inner flex flex-col">
            <div class="flex flex-col self-center lg:w-1300 md:w-full">
                <div id="mw-promo" v-show="!wizard.started && !wizard.finalized" v-on:click="start">
                    <h2>{{wizard.translations[wizard.currentMarket].promoHeading}}</h2>
                    <p>{{wizard.translations[wizard.currentMarket].promoText}} ({{wizard.questions.length}} {{wizard.translations[wizard.currentMarket].questions}})</p>
                    <button class="btn btn--primary btn">{{wizard.translations[wizard.currentMarket].promoCta}}</button>
                </div>
                <div id="mw-questions" v-show="wizard.started && !wizard.finalized">
                    <div class="mwq-item" v-for="(question, index) in wizard.questions" v-show="wizard.currentStep == index">
                        <div class="mw-content">
                            <h3>{{question.heading}}</h3>
                            <div v-if="question.description != null && question.description != ''">{{question.description}}</div>
                            <div style="font-style: italic;margin-bottom: 20px;">({{index + 1}}/{{wizard.questions.length}})</div>                        

                            <div class="mwqi-options">
                                <div v-if="question.id == 'gender'">
                                    <div v-for="option in question.options">
                                        <input type="radio" :value="option.value" name="gender" v-on:change="select(index, option.value)" /> {{ option.text }}
                                    </div>
                                </div>
                                <div v-if="question.id == 'bmi'">
                                    <div v-for="option in question.options">
                                        <input :type="option.inputType" :id="option.id" />
                                    </div>

                                    <button v-on:click="calculateBmi(index)">Det här går att göra när båda ovan är ifyllda!</button>
                                </div>
                                <div v-if="question.id != 'gender' && question.id != 'bmi'">
                                    <div v-for="option in question.options" v-on:click="select(index, option)">
                                        {{option}}
                                    </div>
                                </div>                            
                            </div>
                        </div>

                        <div class="mw-button-row">
                            <button class="btn--primary btn float-left" v-if="wizard.alwaysRenderSteps" v-bind:class="{ 'mw-invalid': !(index > 0) }" v-on:click="step(index, wizard.enums.stepTypes.prev)">{{wizard.translations[wizard.currentMarket].previousBtn}}</button>
                            <button class="btn--primary btn float-left" v-else-if="!wizard.alwaysRenderSteps && index > 0" v-on:click="step(index, wizard.enums.stepTypes.prev)">{{wizard.translations[wizard.currentMarket].previousBtn}}</button>
                            
                            <button class="btn--primary btn float-left" v-if="wizard.alwaysRenderSteps" v-bind:class="{ 'mw-invalid': !(index < wizard.questions.length - 1) }" v-bind:style="{ marginLeft: '20px' }" v-on:click="step(index, wizard.enums.stepTypes.next)">{{wizard.translations[wizard.currentMarket].nextBtn}}</button>
                            <button class="btn--primary btn float-left" v-else-if="!wizard.alwaysRenderSteps && index < wizard.questions.length - 1" v-bind:style="{ marginLeft: index == 0 ? '' : '20px' }" v-on:click="step(index, wizard.enums.stepTypes.next)">{{wizard.translations[wizard.currentMarket].nextBtn}}</button>
                            
                            <button class="btn--primary btn float-right" v-on:click="finalize" v-bind:class="{ 'mw-invalid': !wizard.valid, 'mw-valid': wizard.valid }">{{ wizard.texts.finalizeBtn }}</button>
                        </div>
                    </div>
                </div>
                <div id="mw-result" v-show="wizard.finalized">
                    <div class="mw-content">
                        <h3>{{wizard.translations[wizard.currentMarket].resultHeading}}</h3>
                        <p>{{wizard.translations[wizard.currentMarket].recommendationPrefix}} <strong>{{wizard.result.recommendation}}</strong>!</p>

                        <strong>{{wizard.translations[wizard.currentMarket].recapText}}</strong>
                        <div class="mwr-answers">
                            <div class="mwr-answer" v-for="(question, index) in wizard.questions" v-if="question.value != null">
                                <h5>{{index + 1}}: {{question.heading}}</h5>
                                {{wizard.translations[wizard.currentMarket].yourAnswer}} {{question.options[question.value]}}
                            </div>
                        </div>
                    </div>
                    <div class="mw-button-row">
                        <button class="btn--primary btn float-left" v-on:click="reset">{{wizard.translations[wizard.currentMarket].restartBtn}}</button>
                        <button class="btn--primary btn float-right mw-valid">{{wizard.translations[wizard.currentMarket].recommendationCta}}</button>
                        <button class="btn--primary btn float-right" style="margin-right: 20px;">{{wizard.translations[wizard.currentMarket].seeAllSubscriptions}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MembershipWizard',
  data: function(){
    return {
      wizard: {
        enums: {
            stepTypes: {
                next: 'next',
                prev: 'prev',
                jump: 'jump'
            }
        },
        alwaysRenderSteps: true,
        currentMarket: 'sv',
        translations: {
            sv: {
                finalizeBtnInvalid: 'Svara på alla frågor först',
                finalizeBtnValid: 'Färdig!',
                previousBtn: 'Föregående fråga',
                nextBtn: 'Nästa fråga',
                restartBtn: 'Börja om',
                missingAnswerTemplate: 'Fråga {{index}} saknar svar',
                resultHeading: 'Tack för visat intresse!',
                recommendationPrefix: 'Baserat på dina svar rekommenderar vi vårat abonnemang',
                recapText: 'Se nedan för en sammanfattning av dina svar:',
                yourAnswer: 'Ditt svar:',
                recommendationCta: 'Köp ditt rekommenderade abonnemang!',
                promoHeading: 'Osäker på vilket abonnemang du ska välja?',
                promoText: 'Svara på vårt formulär så rekommenderar vi det abonnemang vi tror passar dig bäst!',
                questions: 'frågor',
                promoCta: 'Få din rekommendation!',
                seeAllSubscriptions: 'Se alla abonnemang'
            },
            en: {
                finalizeBtnInvalid: 'Answer all questions first',
                finalizeBtnValid: 'Finish!',
                previousBtn: 'Previous',
                nextBtn: 'Next',
                restartBtn: 'Start over',
                missingAnswerTemplate: 'Question {{index}} is missing an answer',
                resultHeading: 'Thank you for showing interest!',
                recommendationPrefix: 'Based on your answers, we recommend our subscription',
                recapText: 'See below for a recap of your answers:',
                yourAnswer: 'Your answer:',
                recommendationCta: 'Purchase your recommended subscription!',
                promoHeading: 'Need help deciding which subscription to choose?',
                promoText: 'Answer our questionnaire and we will recommend the subscription best suited for you',
                questions: 'questions',
                promoCta: 'Get your recommendation!',
                seeAllSubscriptions: 'Se alla abonnemang'
            }
        },
        texts: {
            finalizeBtn: ''
        },
        started: false,
        finalized: false,
        valid: false,
        questions: [],
        currentStep: 0,
        subscriptions: [],
        result: {
            heading: '',
            recommendation: 'MammaFitness Premium'
        },
      }
    }
  },
  created() {
      let self = this;

        self.wizard.questions = [
            {
                id: 'gender',
                heading: 'hej hopp q1',//locale.wizard.genderQuestion,
                description: 'hej hopp q1 desc',//locale.wizard.genderQuestionDescription,
                inputType: 'radio',
                options: [
                    {
                        value: 'man',
                        text: 'Man', //locale.wizard.genders.man // 'Man' på svenska, 'Man' på engelska
                    },
                    {
                        value: 'woman',
                        text: 'Kvinna', //locale.wizard.genders.woman // 'Kvinna' på svenska, 'Woan' på engelska
                    },
                ],
                value: null,
            },
            {
                id: 'bmi',
                heading: 'hej hopp q2',//locale.wizard.genderQuestion,
                description: 'hej hopp q2 desc',//locale.wizard.genderQuestionDescription,
                inputType: 'multi',
                options: [
                    {
                        inputType: 'text',
                        id: 'weight',
                    },
                    {
                        inputType: 'text',
                        id: 'height',
                    }
                ],
                value: null,
            },
            {
                id: 'motivation',
                heading: 'hej hopp q3',//locale.wizard.genderQuestion,
                description: 'hej hopp q4 desc',//locale.wizard.genderQuestionDescription,
                inputType: 'range',
                options: [1,2,3,4,5,6],
                value: null,
            },
            {
                id: 'food',
                heading: 'hej hopp q4',//locale.wizard.genderQuestion,
                description: 'hej hopp q4 desc',//locale.wizard.genderQuestionDescription,
                inputType: 'range',
                options: [1,2,3,4,5,6],
                value: null,
            },
        ];
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function() {
        this.wizard.texts.finalizeBtn = this.wizard.translations[this.wizard.currentMarket].finalizeBtnInvalid;
    },
    start: function() {
        this.wizard.started = true;
    },
    reset: function() {
        let items = document.getElementsByClassName('mwq-item');
        for (let i = 0; i < items.length; i++) {
            if (i == 0)
                items[i].style.display = 'block';
            else
                items[i].style.display = 'none';
        }

        let radios = document.querySelectorAll('#membership-wizard input[type=radio]');
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        for (let i = 0; i < this.wizard.questions.length; i++) {
            this.wizard.questions[i].choice = null;
        }

        this.wizard.currentStep = 0;
        this.wizard.valid = false;
        this.wizard.texts.finalizeBtn = this.wizard.translations[this.wizard.currentMarket].finalizeBtnInvalid;
        this.wizard.finalized = false;
    },
    select: function(idx, val) {
        let current = this.wizard.questions[idx];
        current.value = val;
        
        this.validateForm();
    },
    calculateBmi: function(idx) {
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value / 100; // delat på 100 om det anges i cm

        let bmiRanges = [
            {
                id: 1,
                min: 0,
                max: 18.5
            },
            {
                id: 2,
                min: 18.6,
                max: 22,
            },
            {
                id: 3,
                min: 22.1,
                max: 26
            }
        ];

        let bmi = weight / Math.pow(height, 2);

        for (let i = 0; i < bmiRanges.length; i++) {
            if (bmi > bmiRanges[i].min && bmi < bmiRanges[i].max) {
                this.wizard.questions[idx].value = bmiRanges[i].id;
                break;
            }
        }        
    },    
    step: function(idx, type) {
        switch (type) {
            case this.wizard.enums.stepTypes.jump:
                if (idx >= 0 && idx <= this.wizard.questions.length - 1)
                    this.wizard.currentStep = idx;
                break;
            case this.wizard.enums.stepTypes.next:
                if (this.wizard.currentStep < this.wizard.questions.length - 1)
                    this.wizard.currentStep++;
                break;
            case this.wizard.enums.stepTypes.prev:
                if (this.wizard.currentStep > 0)
                    this.wizard.currentStep--;
                break;
            default:
                break;
        }
    },
    validateForm: function() {
        let errors = [];
        for (let i = 0; i < this.wizard.questions.length; i++) {
            if (this.wizard.questions[i].value == null)
                errors.push(this.wizard.translations[this.wizard.currentMarket].missingAnswerTemplate.replace('{{index}}', i + 1));
        }

        if (errors.length < 1) {
            this.wizard.texts.finalizeBtn = this.wizard.translations[this.wizard.currentMarket].finalizeBtnValid;
            this.wizard.valid = true;
        }
        else {
            this.wizard.texts.finalizeBtn = this.wizard.translations[this.wizard.currentMarket].finalizeBtnInvalid;
            this.wizard.valid = false;
        }

        return errors;
    },
    finalize: function() {
        let errors = this.validateForm();
        if (errors.length > 0) {
            for (let i = 0; i < errors.length; i++) {
                alert(errors[i]);
            }

            return false;
        }

        this.wizard.result.recommendation = this.getRecommendation();
        this.wizard.finalized = true;
    },
    getRecommendation: function() {
        let answers = {};
        for (let i = 0; i < this.wizard.questions.length; i++) {
            let q = this.wizard.questions[i];
            answers[q.id] = q.value;            
        }

        /*
        answers {
            'gender': 'man',
            'bmi': 1-4, // 1 == bmi > 0 < 18, 2 == bmi > 18 < 22
            'food': 1,
            'motivation': 2,
        }
        */

        let recommendationsFromBirgitta = {
            // birgittas matris
        };

        return 'Please determine recommendation based on answers';
    }
  }
}
</script>
<style lang="scss">
@import '~/components/blocks/MembershipWizard.scss';
</style>