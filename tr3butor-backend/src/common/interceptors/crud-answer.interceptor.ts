import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CrudAnswerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => {
          const request = context.getArgByIndex(0);
          if(request && request.query && request.query.limit && request.query.limit > 0) {
            if(Array.isArray(data)) return {data, total: data.length};
          }
          return data;
        }),
      );
  }
}
