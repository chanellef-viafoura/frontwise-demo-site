export default function VfTopicFollow({ topicId, topicName, topicType }) {
  return (
    <div className="viafoura" style={{ height: "0px" }}>
      <vf-topic-follow
        topic-id={topicId}
        topic-name={topicName}
        topic-type={topicType}
        show-count="true"
        minimum-count="5"
      ></vf-topic-follow>
    </div>
  );
}
