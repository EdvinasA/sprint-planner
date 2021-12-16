FROM adoptopenjdk/openjdk16:alpine-jre

ENV JAVA_ENABLE_DEBUG=${JAVA_ENABLE_DEBUG}

COPY build/libs/sprint-planning-*.jar sprint-planning.jar
COPY entrypoint.sh .

RUN addgroup --system --gid 1001 appuser && \
    adduser --system --ingroup appuser --uid 1001 appuser

RUN chown appuser:appuser sprint-planning.jar
RUN chmod 500 sprint-planning.jar
RUN chmod +x entrypoint.sh

EXPOSE 8080

USER 1001

CMD ["./entrypoint.sh"]
