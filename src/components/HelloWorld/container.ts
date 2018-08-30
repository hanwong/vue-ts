import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
  @Prop() private msg!: string;
}