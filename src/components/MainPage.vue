<template>
  <div>
    <div class="players">
      <img :src="playerImageResource" />
      <img :src="npcImageResource" />
    </div>
    <div class="scoreboard">
      <div class="messages" v-for="(message, index) in messages" :key="`message-${index}`">
        <div class="message">{{ getAnswer(message) }}</div>
        <div class="message right" v-if="message.answer">{{ getResult(message) }}</div>
      </div>
    </div>
  </div>
  <div class="input">
    <div class="display">
      <span v-for="(num, index) in displayInput" :key="`input-${index}`">
        {{ num }}
      </span>
    </div>
    <div class="row" v-for="(row, index) in buttons" :key="`row-${index}`">
      <button v-for="num in row" :key="`row-${num}`" @click="addInputNumber(num)" :disabled="isDisableAddNum(num)">
        {{ num }}
      </button>
    </div>
    <div class="row">
      <button :disabled="disableRemoveNum" @click="removeInputNumber">
        지우기
      </button>
      <button :disabled="disableToAttack" @click="attack">공격</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {},
  data() {
    return {
      isUserInning: true,
      buttons: [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
      ],
      input: [],
      numbers: [],
      messages: [{
        answer: undefined,
        result: undefined
      }]
    };
  },
  computed: {
    playerImageResource() {
      return this.isUserInning
        ? require('@/assets/player-batter.png')
        : require('@/assets/player.png');
    },
    npcImageResource() {
      return this.isUserInning
        ? require('@/assets/player.png')
        : require('@/assets/player-batter.png');
    },
    displayInput() {
      return Array(3)
        .fill(null)
        .map((num, index) => (this.input[index] >= 0 ? this.input[index] : num));
    },
    disableToAttack() {
      return this.input.length < 3;
    },
    disableRemoveNum() {
      return this.input.length === 0;
    },
  },
  methods: {
    addInputNumber(num) {
      this.input.push(num);
    },
    removeInputNumber() {
      this.input.pop();
    },
    isDisableAddNum(num) {
      return this.input.includes(num);
    },
    attack() {
      const answer = [...this.input];
      this.messages[0].answer = answer;

      setTimeout(() => {
        const result = answer.map((num, index) => {
          if (this.numbers[index] === num) {
            return 'S';
          } else if (this.numbers.includes(num)) {
            return 'B';
          } else {
            return 'K';
          }
        });
        this.messages[0].result = result;
      }, 1000);

      setTimeout(() => {
        // reset input array
        this.input = [];

        if (this.messages[0].result.join('') !== 'SSS') {
          // add empty message
          this.messages = [{
            answer: undefined,
            result: undefined
          }, ...this.messages];
        }
      }, 2000);
    },
    getAnswer(message) {
      if (!message.answer) {
        return '...';
      }
      return message.answer.join('');
    },
    getResult(message) {
      if (!message.result) {
        return '...';
      }

      if (message.result.join('') === 'KKK') {
        return 'OUT';
      }
      if (message.result.join('') === 'SSS') {
        return 'CORRECT'
      }

      return `${message.result.filter(n => n === 'S').length}S ${message.result.filter(n => n === 'B').length}B`;
    }
  },
  mounted() {
    console.log('--- mounted ---');

    const setNumbers = () => {
      while (this.numbers.length < 3) {
        let randomNumber = Math.floor(Math.random() * 9); // random number: 0-9
        !this.numbers.includes(randomNumber) && this.numbers.push(randomNumber);
      }
      console.log(`--- ${this.numbers.join('')} ---`);
    };
    setNumbers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scoreboard {
  padding: 0 0 16px;
}

.players {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
}

.players>img {
  width: 30%;
}

.input {
  position: sticky;
  bottom: 0;
  box-shadow: 0 0 0.6em #ccc;
  border-radius: 20px 20px 0 0;
  padding: 0 16px 16px;
  background-color: #fff;
  z-index: 1;
}

.input .display {
  display: flex;
  justify-content: center;
  margin: 16px 0;
}

.input .display>span {
  display: inline-block;
  font-size: 3rem;
  width: 40px;
  min-height: 62px;
  color: var(--primary-color);
  margin: 0 8px;
  border-bottom: 4px solid var(--secondary-color);
  text-align: center;
}

.input .row {
  width: 100%;
  height: 40px;
  display: flex;
}

.input .row button {
  width: 100%;
}

/* message */
.messages {
  z-index: -1;
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
}

.message {
  position: relative;
  background-color: var(--secondary-color);
  border-radius: 20px;
  color: var(--primary-color);
  margin: 8px 0 0;
  padding: 8px 16px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 30%;
}

.message:after {
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--secondary-color);
  content: "";
  position: absolute;
  top: -16px;
  left: 24px;
}

.message.right:after {
  left: auto;
  right: 24px;
}
</style>
