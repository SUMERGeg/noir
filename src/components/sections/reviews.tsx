import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Label } from "@/components/ui/typography";
import { reviews } from "@/content/reviews";

export function Reviews() {
  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <Container>
        <div className="section-heading-row">
          <div>
            <Label marker className="section-eyebrow">06 / Отзывы</Label>
            <Heading id="reviews-heading">Клиенты о работе</Heading>
          </div>
          <p className="review-rating"><span>4.9</span><span className="review-rating-scale">/ 5</span></p>
        </div>
        <div className="reviews-list">
          {reviews.map((review) => (
            <figure key={review.id} className="review">
              <span className="review-quote-mark" aria-hidden="true">“</span>
              <blockquote><p>{review.quote}</p></blockquote>
              <figcaption><span>{review.author}</span><span lang="en">{review.vehicle}</span></figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
