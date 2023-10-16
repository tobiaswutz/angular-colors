import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface MatrixData {
  yName: string;
  xOptions: { name: string; value: boolean }[];
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {

  @Output() saveClicked: EventEmitter<MatrixData[]> = new EventEmitter<MatrixData[]>();

  public permissions: string[] = [
    'user', 'anfragen', 'user-edit', 'permission-4', 'permission-5', 'permission-6',
    'permission-7', 'permission-8', 'permission-9', 'permission-10', 'permission-11',
    'permission-12', 'permission-13', 'permission-14', 'permission-15', 'permission-16',
    'permission-17', 'permission-18', 'permission-19', 'permission-20', 'permission-21',
    'permission-22', 'permission-23', 'permission-24', 'permission-25', 'permission-26',
    'permission-27', 'permission-28', 'permission-29', 'permission-30', 'permission-31',
    'permission-32', 'permission-33', 'permission-34', 'permission-35', 'permission-36',
    'permission-37', 'permission-38', 'permission-39', 'permission-40'
  ];
  public permissionVariants: string[] = ['u_read', 'u_write', 'u_delete', 'u_execute', 'o_read', 'o_write', 'o_delete', 'o_execute', 'g_read', 'g_write', 'g_delete', 'g_execute', 's_read', 's_write', 's_delete', 's_execute'];

  public matrixData: MatrixData[] = [];

  onSaveClick() {

    console.log(this.matrixData);

    this.saveClicked.emit(this.matrixData);
  }

  constructor() {
    this.permissions.forEach((permission) => {
      this.matrixData.push({
        yName: permission,
        xOptions: this.permissionVariants.map((variant) => ({
          name: variant,
          value: false,
        })),
      });
    });
  }

  public toggleAll(event: any) {
    this.matrixData.forEach((permission) => {
      permission.xOptions.forEach((option) => {
        option.value = event.target.checked;
      });
    });
  }

  hoveredRow: number | null = null;
  hoveredColumn: number | null = null;

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'TD') {
      const row = target.parentElement as HTMLTableRowElement;
      const columnIndex = Array.from(row.children).indexOf(target);

      this.hoveredRow = row.rowIndex;
      this.hoveredColumn = columnIndex;
    }
  }

  clearHover() {
    this.hoveredRow = null;
    this.hoveredColumn = null;
  }
}
