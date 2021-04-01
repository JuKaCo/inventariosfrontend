import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private oauthService: OAuthService) { }
  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    if (this.oauthService.hasValidIdToken()) {
      return true;
    }

    const promise = new Promise<boolean>((resolve, reject) => {
      return this.oauthService.loadDiscoveryDocumentAndTryLogin().then((success: boolean) => {
        if (!success) {
          this.router.navigate(['/']);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
    return promise;
  }*/

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('---->',this.oauthService.hasValidAccessToken());
    if (
      this.oauthService.hasValidAccessToken()
    ) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
