import { Subjects, Publisher, PaymentCreatedEvent } from '@pptix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
