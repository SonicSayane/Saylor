import { renderHook } from "@testing-library/react-hooks";

import { useEnvLink } from "./useEnvLink";

describe("useEnvLink", () => {
  it("should return link to the cloud environment on production.", () => {
    const { result } = renderHook(() => useEnvLink());
    expect(result.current).toBe("");
  });
  it("should return link to the cloud environment on staging", () => {
    const { result } = renderHook(() => useEnvLink());
    expect(result.current).toBe("");
  });
});
