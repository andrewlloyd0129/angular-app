import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.andrewlloyd.com', 'Ruby on Rails', 150, 120, 15, 'andrewlloyd0129@gmail.com')
  proposalTwo: Proposal = new Proposal(15, 'XYZ Company', 'http://portfolio.andrewlloyd.com', 'Ruby on Rails', 150, 600, 15, 'andrewlloyd0129@gmail.com')
  proposalThree: Proposal = new Proposal(15, 'My Company', 'http://portfolio.andrewlloyd.com', 'Ruby on Rails', 13, 120, 15, 'andrewlloyd0129@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree]
}