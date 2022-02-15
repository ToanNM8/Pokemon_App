import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() itemPerPage: number = 20;
  @Input() numbers: number[] = [10, 20, 50, 100];
  @Input() totalPages: number = 1;
  @Output() changeCurrentPage = new EventEmitter();
  @Output() changeItemPerPage = new EventEmitter();
  currentPage = 1;

  constructor() {}

  ngOnInit(): void {}

  onNext(): void {
    this.currentPage = this.currentPage + 1;
    this.changeCurrentPage.emit(this.currentPage);
  }

  onPrevious(): void {
    this.currentPage = this.currentPage - 1;
    this.changeCurrentPage.emit(this.currentPage);
  }

  onChangeItemPerPage(item: number): void {
    this.itemPerPage = item;
    this.currentPage = 1;
    this.changeItemPerPage.emit(this.itemPerPage);
  }
}
