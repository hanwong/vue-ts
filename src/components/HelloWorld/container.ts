import { Component, Prop, Vue } from 'vue-property-decorator';
import { NoCache } from '@/deco/test';

@Component
export default class Container extends Vue {
  @Prop() private msg!: string;

  @NoCache
  get computedMsg () {
    return this.msg;
  }

}