const InputNumber = {
  props: ['placeholder', 'value'],

  data: function () {
    return {
      className: 'col-sm-9',
    }
  },

  template: `
  <div class="{{ className }}">
    <input type="text" class="form-control" placeholder="{{ placeholder }}" v-model="value" />
    <i class="glyphicon glyphicon-refresh form-control-feedback" @click="gen"></i>
  </div>
  `,

  methods: {
    gen: function () {
      this.value = Math.floor(Math.random() * 10e16);
    }
  },

  ready: function () {
    if (!this.value) {
      this.gen();
    }
  },
};


export default InputNumber;
