// This is not pretty.
// See https://github.com/facebook/react/issues/11538#issuecomment-417504600

export default function patchDOMForGoogleTranslate() {
  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    // $FlowFixMe Intentionally monkepatching.
    Node.prototype.removeChild = function (child) {
      if (child.parentNode !== this) {
        if (typeof console !== "undefined") {
          console.error(
            "Cannot remove a child from a different parent",
            child,
            this
          );
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    // $FlowFixMe Intentionally monkepatching.
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (typeof console !== "undefined") {
          console.error(
            "Cannot insert before a reference node from a different parent",
            referenceNode,
            this
          );
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, arguments);
    };
  }
}
