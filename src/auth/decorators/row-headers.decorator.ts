import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
export const RowHeaders = createParamDecorator(
  (data, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    const rawHeaders = req.rawHeaders;

    if (!rawHeaders)
      throw new InternalServerErrorException('RawHeaders not found');
    return rawHeaders;
  },
);
