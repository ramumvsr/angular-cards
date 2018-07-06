import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CourseService {



  public data = {
    accessibleApps: [
      {
        applicationID: 1,
        applicationName: 'CATS',
        description: 'Trackijkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjng System Cost Apportionment',
        roleID: 1,
        roleName: 'Admin'
      },
      { applicationID: 2, applicationName: 'GSWCS', description: 'GSWCS Audit Data', roleID: 1, roleName: 'Admin' },
      { applicationID: 3, applicationName: 'QRI', description: 'Quality Request Item', roleID: 1, roleName: 'Admin' },
      { applicationID: 4, applicationName: 'PCARD', description: 'P-Card Database', roleID: 1, roleName: 'Admin' },
    ],
    notAccessibleApps: [
      { applicationId: 1, name: 'PDC', description: ' Pre-Delivery Correction Database', isActive: true },
      { applicationId: 2, name: 'PFS', description: 'PFS Database', isActive: true },
      { applicationId: 3, name: 'Mobile CATS', description: 'Shipping Quality Audit Tracking', isActive: true },
      { applicationId: 4, name: 'Parts Check-In', description: 'Parts Check-In Database', isActive: true }
    ],
    userID: 1
  };

  public mockData = new BehaviorSubject(this.data);


}

